from django.shortcuts import render
from rest_framework import viewsets
from .models import Image, User
from .serializers import ImageSerializer, UserSerializer

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer