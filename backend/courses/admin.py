from django.contrib import admin
from django.utils.html import format_html
from .models import Image, User, Course, Enrollment, CourseImage, Lesson, LessonCompletion

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ("title", "uploaded_at")

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("email", "full_name", "role", "is_staff", "is_active", "avatar_preview", "get_courses", "get_progress")
    search_fields = ("email", "full_name")
    list_filter = ("role", "is_staff", "is_active")
    readonly_fields = ("avatar_preview", "course_progress")
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('full_name', 'avatar', 'google_id', 'telegram_id')}),
        ('Courses', {'fields': ('courses', 'course_progress')}),
        ('Permissions', {'fields': ('role', 'is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )

    def avatar_preview(self, obj):
        if obj.avatar and obj.avatar.image:
            return format_html('<img src="{}" width="40" style="border-radius: 4px;" />', obj.avatar.image.url)
        return "-"
    avatar_preview.short_description = "Аватар"

    def get_courses(self, obj):
        return ", ".join([course.title for course in obj.courses.all()])
    get_courses.short_description = "Курсы"

    def get_progress(self, obj):
        return ", ".join([f"{course.title}: {obj.get_course_progress_percent(course)}%" for course in obj.courses.all()])
    get_progress.short_description = "Прогресс"

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "teacher", "is_published", "created_at")
    list_filter = ("is_published",)
    search_fields = ("title", "description")
    prepopulated_fields = {"slug": ("title",)}

@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ("user", "course", "get_progress_percent", "is_completed", "enrolled_at")
    list_filter = ("is_completed", "enrolled_at")
    search_fields = ("user__email", "course__title")
    actions = ['sync_to_user_profile']

    def sync_to_user_profile(self, request, queryset):
        for enrollment in queryset:
            user = enrollment.user
            course = enrollment.course
            user.courses.add(course)
            user.course_progress[str(course.id)] = enrollment.progress
            user.save()
        self.message_user(request, f"Синхронизировано {queryset.count()} записей с профилями пользователей.")
    sync_to_user_profile.short_description = "Синхронизировать с профилем пользователя"

@admin.register(CourseImage)
class CourseImageAdmin(admin.ModelAdmin):
    list_display = ("course", "image")
    search_fields = ("course__title",)

@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "order", "created_at")
    list_filter = ("course",)
    search_fields = ("title", "content")

admin.site.register(LessonCompletion)