from shelters.models import ShelterData
from rest_framework import serializers

class ShelterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShelterData
        fields = "__all__"