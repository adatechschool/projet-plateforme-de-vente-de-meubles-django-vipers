from django.contrib.auth.models import AbstractUser
from django.db import models



# Create your models here.

class User(AbstractUser):
    phone_number = models.CharField(max_length=17, null=False, blank=False, default=0000000000)
    postal_adress = models.CharField(max_length=50, null=True, blank=False)



