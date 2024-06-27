from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import Furniture
from .serializers import FurnitureSerializer


class FurnitureViewSet(viewsets.ModelViewSet):
    serializer_class = FurnitureSerializer
    queryset = Furniture.objects.all()