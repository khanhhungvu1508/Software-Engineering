from rest_framework import serializers
from .models import TransHis

class TransHisSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransHis
        fields = ('id', 'uid', 'when', 'product', 'total', 'status')