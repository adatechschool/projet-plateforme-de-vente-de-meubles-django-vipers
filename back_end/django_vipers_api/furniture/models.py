from django.db import models

# Create your models here.

class Color(models.Model):
    name = models.fields.CharField(max_length=50) #clé étrangère dans l'idée de créer un id, de choisir l'id pour plus de choix de couleurs

class Type(models.Model):
    name = models.CharField(max_length=50)

class Material(models.Model):
    name = models.CharField(max_length=50)

class Furniture(models.Model):
    name = models.CharField(max_length=50) #On définit le titre, son type(texte) et on limite à 50 caractères
    type = models.ForeignKey(Type)
    price = models.FloatField(default=0.00)
    dimensions = models.CharField(max_length=50) #prise en compte de longueur x largeur x profondeur
    colors = models.ManyToManyField(Color) #car il y a plrs couleur pour un meuble et une couleur pour plusieurs meubles
    descritpion = models.TextField(null=True) #c'est ok que la place soit vide
    materials = models.ManyToManyField(Material)
    available = models.BooleanField(default=True)

