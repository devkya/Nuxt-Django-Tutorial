from django.urls import path, include
from .views import RecipeViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'recipes', RecipeViewset)

urlpatterns = [
    path('', include(router.urls)),
]
