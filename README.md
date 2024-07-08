Django Vipers - Plateforme de Vente de Meubles d'Occasion (work in progress)

Django Vipers est une application web conçue pour l'achat et la vente de meubles d'occasion, inspirée par des plateformes comme Vinted. Le projet utilise React pour le front-end, Tailwind CSS pour le style, et Django avec Django REST framework pour le back-end. La base de données est gérée avec SQLite3.

Fonctionnalités

-Authentification des utilisateurs : Enregistrement et connexion sécurisés des utilisateurs.

-Panneau d'administration : Interface d'administration pour gérer les utilisateurs, les articles et les transactions.

-Annonces de meubles : Les utilisateurs peuvent mettre en vente des meubles avec des images et des descriptions.

-Recherche et filtrage : Fonctionnalités avancées de recherche et de filtrage pour trouver des articles spécifiques.

-Mises à jour en temps réel : Récupération des données et mise à jour de l'interface utilisateur sans rechargement.

-API : Points de terminaison API personnalisés créés avec Django REST framework.

-Design responsive : Interface adaptée aux mobiles grâce à Tailwind CSS.

Technologies Utilisées

Front End : React, Tailwind CSS Back End : Django, Django REST framework Base de Données : SQLite3 Contrôle de Version : Git

Installation et Configuration

Cloner le dépôt : https://github.com/adatechschool/projet-plateforme-de-vente-de-meubles-django-vipers

Configuration du Back End :

Créer un environnement virtuel : python -m venv env source env/bin/activate ou env\Scripts\activate

Installer les paquets requis : pip install -r requirements.txt

Appliquer les migrations : python manage.py migrate

Créer un superutilisateur pour accéder à l'administration : python manage.py createsuperuser

Démarrer le serveur Django : python manage.py runserver

Configuration du Front End :

Aller dans le répertoire du front-end : cd front_end

Installer les dépendances : npm install

Démarrer le serveur de développement React : npm start

Utilisation

Accéder à l'application à http://localhost:3000 pour le front-end. Le panneau d'administration est accessible à http://localhost:8000/admin. Les points de terminaison API sont disponibles à http://localhost:8000/api.

Points de terminaison API

Authentification :

POST /api/auth/login/ - Connexion utilisateur POST /api/auth/register/ - Enregistrement utilisateur Articles : GET /api/items/ - Lister tous les articles POST /api/items/ - Créer un nouvel article (utilisateurs authentifiés seulement) GET /api/items/:id/ - Récupérer les détails d'un article PUT /api/items/:id/ - Mettre à jour les détails d'un article (utilisateurs authentifiés seulement) DELETE /api/items/:id/ - Supprimer un article (utilisateurs authentifiés seulement)
