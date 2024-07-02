from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import Furniture
from .models import Type
from .serializers import FurnitureSerializer
from .serializers import TypeSerializer


class FurnitureViewSet(viewsets.ModelViewSet):
    serializer_class = FurnitureSerializer
    queryset = Furniture.objects.all()

class TypeViewSet(viewsets.ModelViewSet):
    serializer_class = TypeSerializer
    queryset = Type.objects.all()