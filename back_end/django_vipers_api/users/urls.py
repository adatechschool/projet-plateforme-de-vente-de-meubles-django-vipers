from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from . import views


app_name = 'users'

urlpatterns = [
    path('login/', views.login_user, name ='login'), 
    path('register/', views.register_user, name ='register'), 
    
]

router = DefaultRouter()
router.register('users', UserViewSet, 'user')

