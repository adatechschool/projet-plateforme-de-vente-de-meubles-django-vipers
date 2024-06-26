from django.contrib import admin
from furniture.models import Furniture, Type, Color, Material

# Register your models here.

admin.site.register(Furniture)
admin.site.register(Type)
admin.site.register(Color)
admin.site.register(Material)
