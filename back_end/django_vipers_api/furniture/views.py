from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import Furniture
from .models import Type
from .models import Material
from .models import Color
from .serializers import FurnitureSerializer
from .serializers import TypeSerializer
from .serializers import MaterialSerializer
from .serializers import ColorSerializer


class FurnitureViewSet(viewsets.ModelViewSet):
    serializer_class = FurnitureSerializer
    queryset = Furniture.objects.all()

class TypeViewSet(viewsets.ModelViewSet):
    serializer_class = TypeSerializer
    queryset = Type.objects.all()

class MaterialViewSet(viewsets.ModelViewSet):
    serializer_class = MaterialSerializer
    queryset = Material.objects.all()

class ColorViewSet(viewsets.ModelViewSet):
    serializer_class = ColorSerializer
    queryset = Color.objects.all()