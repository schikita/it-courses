from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db.models import JSONField  # Updated to use database-agnostic JSONField

class Image(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class UserRole(models.TextChoices):
    STUDENT = 'student', 'Ученик'
    TEACHER = 'teacher', 'Учитель'
    ADMIN = 'admin', 'Админ'

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email обязателен")
        email = self.normalize_email(email)
        extra_fields.setdefault("role", UserRole.STUDENT)
        user = self.model(email=email, **extra_fields)
        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("role", UserRole.ADMIN)
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255, blank=True)
    role = models.CharField(max_length=20, choices=UserRole.choices, default=UserRole.STUDENT)
    avatar = models.ForeignKey('Image', null=True, blank=True, on_delete=models.SET_NULL, related_name='users')
    google_id = models.CharField(max_length=255, blank=True, null=True)
    telegram_id = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    courses = models.ManyToManyField(
        'Course',
        related_name='students',
        limit_choices_to={'is_published': True},
        blank=True,
        help_text="Курсы, на которые записан пользователь"
    )
    course_progress = JSONField(default=dict, blank=True, help_text="Прогресс по курсам в формате {course_id: progress}")

    objects: 'UserManager' = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def get_role_display(self) -> str:
        try:
            return UserRole(self.role).label
        except ValueError:
            return self.role

    def __str__(self):
        return f"{self.full_name or self.email} ({self.get_role_display()})"

    def update_course_progress(self, course):
        total_lessons = course.lessons.count()
        if total_lessons == 0:
            progress = 0.0
        else:
            completed_lessons = LessonCompletion.objects.filter(
                user=self,
                lesson__course=course,
                is_completed=True
            ).count()
            progress = completed_lessons / total_lessons
        self.course_progress[str(course.id)] = min(max(progress, 0.0), 1.0)
        self.save()

    def get_course_progress_percent(self, course):
        progress = self.course_progress.get(str(course.id), 0.0)
        return round(progress * 100, 2)

class Course(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    teacher = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={'role': UserRole.TEACHER},
        related_name='taught_courses',  # Changed to avoid clash with User.courses
    )
    image = models.ForeignKey(
        Image,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='course_images'
    )
    duration_hours = models.PositiveIntegerField(default=1)
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

class Enrollment(models.Model):
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        limit_choices_to={'role': UserRole.STUDENT}
    )
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    enrolled_at = models.DateTimeField(auto_now_add=True)
    progress = models.FloatField(
        default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(1.0)]
    )
    is_completed = models.BooleanField(default=False)

    def get_progress_percent(self):
        if not self.course or self.course.lessons.count() == 0:
            return 0
        return round(self.progress * 100, 2)

    def update_progress(self):
        total_lessons = self.course.lessons.count()
        if total_lessons == 0:
            self.progress = 0.0
        else:
            completed_lessons = LessonCompletion.objects.filter(
                user=self.user,
                lesson__course=self.course,
                is_completed=True
            ).count()
            self.progress = completed_lessons / total_lessons
        self.is_completed = self.progress >= 1.0
        self.save()
        # Sync with User model
        self.user.update_course_progress(self.course)

    def save(self, *args, **kwargs):
        if self.progress >= 1.0:
            self.is_completed = True
        super().save(*args, **kwargs)

    class Meta:
        unique_together = ('user', 'course')
        indexes = [
            models.Index(fields=['user', 'course']),
        ]
        verbose_name = "Запись на курс"
        verbose_name_plural = "Записи на курсы"

    def __str__(self):
        return f"{self.user} → {self.course}"

class CourseImage(models.Model):
    course = models.ForeignKey('Course', on_delete=models.CASCADE)
    image = models.ForeignKey('Image', on_delete=models.CASCADE)

    def __str__(self):
        return f"Изображение для курса: {self.course.title}"

class Lesson(models.Model):
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name='lessons'
    )
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    video_url = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']
        verbose_name = "Урок"
        verbose_name_plural = "Уроки"

    def __str__(self):
        return f"{self.title} ({self.course.title})"

class LessonCompletion(models.Model):
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        limit_choices_to={'role': UserRole.STUDENT}
    )
    lesson = models.ForeignKey('Lesson', on_delete=models.CASCADE)
    completed_at = models.DateTimeField(auto_now_add=True)
    is_completed = models.BooleanField(default=False)

    class Meta:
        unique_together = ('user', 'lesson')
        indexes = [
            models.Index(fields=['user', 'lesson']),
        ]
        verbose_name = "Завершение урока"
        verbose_name_plural = "Завершения уроков"

    def __str__(self):
        return f"{self.user} completed {self.lesson}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.is_completed:
            enrollment = Enrollment.objects.filter(user=self.user, course=self.lesson.course).first()
            if enrollment:
                enrollment.update_progress()
            self.user.update_course_progress(self.lesson.course)