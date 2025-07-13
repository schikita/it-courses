from rest_framework import serializers
from .models import (
    Image, User, Course, Lesson, Enrollment, CourseImage
)


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'


# ------------------- User -------------------

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'full_name', 'role')


class UserDetailSerializer(serializers.ModelSerializer):
    avatar = ImageSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'full_name', 'role', 'avatar', 'google_id', 'telegram_id')


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'full_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        return user


# ------------------- Course -------------------

class CourseSerializer(serializers.ModelSerializer):
    teacher = UserListSerializer(read_only=True)
    image = ImageSerializer(read_only=True)

    class Meta:
        model = Course
        fields = '__all__'


class CourseDetailSerializer(serializers.ModelSerializer):
    teacher = UserListSerializer(read_only=True)
    image = ImageSerializer(read_only=True)
    lessons = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = '__all__'

    def get_lessons(self, obj):
        return LessonSerializer(obj.lessons.all(), many=True).data


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
    progress = serializers.FloatField(read_only=True)

    class Meta:
        model = Enrollment
        fields = ('id', 'user', 'course', 'course_id', 'progress', 'is_completed', 'enrolled_at')
        read_only_fields = ('user', 'enrolled_at')


# ------------------- CourseImage -------------------

class CourseImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseImage
        fields = '__all__'
