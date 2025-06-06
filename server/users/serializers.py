"""
Serializers for the user API View
"""

from django.contrib.auth import authenticate, get_user_model
from django.utils.translation import gettext as _  # convention import name
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    """Serialzier for the user object."""

    class Meta:
        model = get_user_model()
        fields = ["id", "email", "password", "first_name", "last_name", "created_at", "updated_at"]
        extra_kwargs = {"password": {"write_only": True, "min_length": 5}}

    # override default create method to call custom create_user method
    def create(self, validated_data):
        """Cteate and return a user with encrypted password"""
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update and return user"""

        password = validated_data.pop("password", None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user


class AuthTokenSerializer(serializers.Serializer):
    """Serialzer for the user auth token"""

    email = serializers.EmailField()
    password = serializers.CharField(
        style={"input_type": "password"},
        trim_whitespace=False,
    )

    def validate(self, attrs):
        """Validate and authenticate the user."""
        email = attrs.get("email")
        password = attrs.get("password")
        user = authenticate(
            request=self.context.get("request"),
            username=email,
            password=password,
        )
        if not user:
            msg = _("Unable to authenticate with provided credentials")
            raise serializers.ValidationError(msg, code="authorization")
        attrs["user"] = user
        return attrs
