from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import authenticate, login
from django.contrib import messages

# Create your views here.
from rest_framework import viewsets

from django.contrib.auth import get_user_model
User = get_user_model()

from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


def login_user(request):
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST["password"]

        user=authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("www.google.com")
        else:
            messages.info(request,"identifiant ou mdp incorrect")

    form = AuthenticationForm()
    return render(request, 'users/login.html', {"form":form})


def register_user(request):
    pass

