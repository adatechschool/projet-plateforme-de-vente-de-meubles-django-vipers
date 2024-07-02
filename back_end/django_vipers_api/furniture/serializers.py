# posts/serializers.py
from rest_framework import serializers
from .models import Furniture
from .models import Type
from .models import Material
from .models import Color
# pour convertir le django en Json (on va convertir Furniture)
class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = '__all__' 

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__' 

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__' 

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__' 