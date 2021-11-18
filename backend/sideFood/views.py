from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SideFoodSerializer
from .models import SideFood

# Create your views here.

class SideFoodView(viewsets.ModelViewSet):
    serializer_class = SideFoodSerializer
    queryset = SideFood.objects.all()