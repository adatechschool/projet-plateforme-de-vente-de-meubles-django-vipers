from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from . import views


app_name = 'users'

urlpatterns = [
    path('login/', views.LoginView.as_view()), 
    path('signup/', views.SignupView.as_view()),
       
]

router = DefaultRouter()
router.register('users', UserViewSet, 'user')


