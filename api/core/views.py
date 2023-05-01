from django.shortcuts import render
from .serializers import RecipeSerializer
from .models import Recipe
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class RecipeViewset(ModelViewSet):
  serializer_class = RecipeSerializer
  queryset = Recipe.objects.all()
  