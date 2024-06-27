# créer un chemin URL pour 6 actions (GET, POST...etc) 
#pour lier les requêtes aux URLS

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FurnitureViewSet

router = DefaultRouter()
router.register('furniture', FurnitureViewSet, 'furniture')

urlpatterns = [
    path('', include(router.urls)),
]