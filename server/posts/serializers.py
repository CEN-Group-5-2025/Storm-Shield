from posts.models import PostBase
from rest_framework import serializers

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostBase
        fields = "__all__"