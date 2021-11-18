from rest_framework import serializers
from .models import SideFood

class SideFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = SideFood
        fields = ('id', 'name', 'price', 'description', 'category', 'src')