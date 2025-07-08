from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, CurrentUserView, UserRegistrationView,
    ImageViewSet, CourseViewSet, LessonViewSet,
    EnrollmentViewSet, CourseImageViewSet
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'images', ImageViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'lessons', LessonViewSet)
router.register(r'enrollments', EnrollmentViewSet)
router.register(r'course-images', CourseImageViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/users/me/', CurrentUserView.as_view(), name='current-user'),
    path('api/register/', UserRegistrationView.as_view(), name='register'),
]
