from rest_framework import serializers
from .models import Image, User, Course, Lesson, Enrollment, CourseImage

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

# ------------------- Course -------------------

class CourseSerializer(serializers.ModelSerializer):
    teacher = serializers.SerializerMethodField()
    image = ImageSerializer(read_only=True)

    class Meta:
        model = Course
        fields = '__all__'

    def get_teacher(self, obj):
        return {
            'id': obj.teacher.id,
            'email': obj.teacher.email,
            'full_name': obj.teacher.full_name,
            'role': obj.teacher.role
        }

class CourseDetailSerializer(serializers.ModelSerializer):
    teacher = serializers.SerializerMethodField()
    image = ImageSerializer(read_only=True)
    lessons = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = '__all__'

    def get_teacher(self, obj):
        return {
            'id': obj.teacher.id,
            'email': obj.teacher.email,
            'full_name': obj.teacher.full_name,
            'role': obj.teacher.role
        }

    def get_lessons(self, obj):
        return LessonSerializer(obj.lessons.all(), many=True).data

# ------------------- User -------------------

class UserListSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True, read_only=True)
    course_progress = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'email', 'full_name', 'role', 'courses', 'course_progress')

    def get_course_progress(self, obj):
        return [
            {'course_id': course.id, 'title': course.title, 'progress_percent': obj.get_course_progress_percent(course)}
            for course in obj.courses.all()
        ]

class UserDetailSerializer(serializers.ModelSerializer):
    avatar = ImageSerializer(read_only=True)
    courses = CourseSerializer(many=True, read_only=True)
    course_progress = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'email', 'full_name', 'role', 'avatar', 'google_id', 'telegram_id', 'courses', 'course_progress')

    def get_course_progress(self, obj):
        return [
            {'course_id': course.id, 'title': course.title, 'progress_percent': obj.get_course_progress_percent(course)}
            for course in obj.courses.all()
        ]

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'full_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        return user

# ------------------- Lesson -------------------

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'

# ------------------- Enrollment -------------------

class EnrollmentSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)
    course_id = serializers.PrimaryKeyRelatedField(
        queryset=Course.objects.all(), source='course', write_only=True)
    user = UserListSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.filter(role='student'), source='user', write_only=True, required=False)

    class Meta:
        model = Enrollment
        fields = ('id', 'user', 'user_id', 'course', 'course_id', 'progress', 'is_completed', 'enrolled_at')
        read_only_fields = ('progress', 'is_completed', 'enrolled_at')

    def validate(self, data):
        # If user_id is not provided, use the authenticated user
        if 'user' not in data and self.context.get('request') and self.context['request'].user.is_authenticated:
            data['user'] = self.context['request'].user
        # Ensure user is a student
        if data['user'].role != 'student':
            raise serializers.ValidationError("Only students can be enrolled in courses.")
        # Check for duplicate enrollment
        if Enrollment.objects.filter(user=data['user'], course=data['course']).exists():
            raise serializers.ValidationError("User is already enrolled in this course.")
        return data

    def create(self, validated_data):
        enrollment = Enrollment.objects.create(**validated_data)
        # Sync to User.courses and User.course_progress
        user = enrollment.user
        user.courses.add(enrollment.course)
        user.course_progress[str(enrollment.course.id)] = enrollment.progress
        user.save()
        return enrollment

# ------------------- CourseImage -------------------

class CourseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseImage
        fields = '__all__'