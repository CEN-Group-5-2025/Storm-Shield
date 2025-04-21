from rest_framework import serializers

from core.abstracts.serializers import StringListField
from shelters.models import ShelterData


class ShelterSerializer(serializers.ModelSerializer):

    amenities = StringListField(required=False)

    class Meta:
        model = ShelterData
        fields = "__all__"
