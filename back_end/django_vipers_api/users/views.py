from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import UserRegistrationForm, LoginForm
from rest_framework.response import Response
from rest_framework.views import APIView

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
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("www.google.com")
            else:
                messages.info(request, "Identifiant ou mot de passe incorrect")
    else:
        form = LoginForm()
    return render(request, 'users/login.html', {"form": form})


def register_user(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=True)
            return redirect('login')  # Redirect to login page after registration
    else:
        form = UserRegistrationForm()
    return render(request, 'users/register.html', {'form': form})


class LoginView(APIView):
    def post(self, request):
        user = authenticate(username=request.data['username'], password=request.data['password'])
        if user:
            return Response({'message': "Connection !", "login": True})        
        else:
            return Response({'error': 'Invalid credentials'}, status=401)
        
class SignupView(APIView):
    def post(self,request):
        user = request.data.get('user')
        
        serializer = UserSerializer(data=user)
        if serializer.is_valid(raise_exception=True):
            user_saved = serializer.save()
            return Response({"success": "User '{}' created successfully".format(user_saved.username)})
        else:
            return Response({"error": "error"})
            

        