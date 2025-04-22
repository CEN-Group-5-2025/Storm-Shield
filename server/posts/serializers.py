from rest_framework import serializers

from posts.models import PostBase


class PostSerializer(serializers.ModelSerializer):

    author = serializers.SlugRelatedField(slug_field="email", read_only=True)

    class Meta:
        model = PostBase
        fields = [
            "id",
            "title",
            "content",
            "author",
            "avatar",
            "votes",
            "created_at",
            "updated_at",
        ]
        # extra_kwargs = {"author": {"read_only": True}}
