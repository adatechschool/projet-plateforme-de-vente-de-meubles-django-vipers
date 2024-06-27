from django.db import models

# Create your models here.

class Color(models.Model):
    name = models.fields.CharField(max_length=50) #clé étrangère dans l'idée de créer un id, de choisir l'id pour plus de choix de couleurs

    def __str__(self):
        return self.name

class Type(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Material(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Furniture(models.Model):
    name = models.CharField(max_length=50) #On définit le titre, son type(texte) et on limite à 50 caractères
    type = models.ForeignKey(Type, on_delete=models.SET_NULL, null=True)
    price = models.FloatField(default=0.00)
    dimensions = models.CharField(max_length=50, null=True) #prise en compte de longueur x largeur x profondeur
    colors = models.ManyToManyField(Color, blank=True) #car il y a plrs couleur pour un meuble et une couleur pour plusieurs meubles
    description = models.TextField(null=True) #c'est ok que la place soit vide
    materials = models.ManyToManyField(Material, blank=True)
    available = models.BooleanField(default=True)
    image1 = models.ImageField(upload_to='media/images', blank=False, null=False, default="images/vase_ocean2.jpg")
    image2 = models.ImageField(upload_to='media/images', blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.available})"

