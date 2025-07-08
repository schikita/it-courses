from rest_framework.routers import DefaultRouter
from .views import ImageViewSet
from .views import UserViewSet

router = DefaultRouter()
router.register(r'images', ImageViewSet)
router.register(r'users', UserViewSet)

urlpatterns = router.urls
