from rest_framework import serializers
from .models import PostBase


class PostBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostBase
        fields = '__all__'
