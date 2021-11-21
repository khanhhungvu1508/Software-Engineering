from rest_framework import serializers
from .models import MainFood

class MainFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainFood
        fields = ('id', 'name', 'price', 'description', 'category', 'src')