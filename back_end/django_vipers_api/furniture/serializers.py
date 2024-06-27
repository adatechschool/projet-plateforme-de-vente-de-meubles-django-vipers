# posts/serializers.py
from rest_framework import serializers
from .models import Furniture

# pour convertir le django en Json (on va convertir Furniture)
class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = '__all__' 