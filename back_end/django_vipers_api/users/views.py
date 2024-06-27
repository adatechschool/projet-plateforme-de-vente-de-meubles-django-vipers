from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from django.contrib.auth import get_user_model
User = get_user_model()

from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()