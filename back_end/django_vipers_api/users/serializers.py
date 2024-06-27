# posts/serializers.py
from rest_framework import serializers

from django.contrib.auth import get_user_model
User = get_user_model()

# pour convertir le django en Json (on va convertir Furniture)
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' 