# créer un chemin URL pour 6 actions (GET, POST...etc) 
#pour lier les requêtes aux URLS

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FurnitureViewSet
from .views import TypeViewSet

router = DefaultRouter()
router.register('furniture', FurnitureViewSet, 'furniture')
router.register('type', TypeViewSet, 'type')

urlpatterns = [
    path('', include(router.urls)),
]