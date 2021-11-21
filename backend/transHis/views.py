from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TransHisSerializer
from .models import TransHis

# Create your views here.

class TransHisView(viewsets.ModelViewSet):
    serializer_class = TransHisSerializer
    queryset = TransHis.objects.all()