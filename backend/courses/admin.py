from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Image, User, Course, Enrollment, CourseImage, Lesson
)

@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ("title", "uploaded_at")


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("email", "full_name", "role", "is_staff", "is_active", "avatar_preview")
    search_fields = ("email", "full_name")
    list_filter = ("role", "is_staff", "is_active")
    readonly_fields = ("avatar_preview",)

    def avatar_preview(self, obj):
        if obj.avatar and obj.avatar.image:
            return format_html('<img src="{}" width="40" style="border-radius: 4px;" />', obj.avatar.image.url)
        return "-"
    avatar_preview.short_description = "Аватар"


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "teacher", "is_published", "created_at")
    list_filter = ("is_published",)
    search_fields = ("title", "description")
    prepopulated_fields = {"slug": ("title",)}


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ("user", "course", "progress", "is_completed", "enrolled_at")
    list_filter = ("is_completed", "enrolled_at")
    search_fields = ("user__email", "course__title")


@admin.register(CourseImage)
class CourseImageAdmin(admin.ModelAdmin):
    list_display = ("course", "image")
    search_fields = ("course__title",)


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ("title", "course", "order", "created_at")
    list_filter = ("course",)
    search_fields = ("title", "content")
