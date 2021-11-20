from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MainFoodSerializer
from .models import MainFood

# Create your views here.

class MainFoodView(viewsets.ModelViewSet):
    serializer_class = MainFoodSerializer
    queryset = MainFood.objects.all()