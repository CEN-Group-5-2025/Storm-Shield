from django.db.models import query
from django.shortcuts import render
from yaml import serialize_all
from shelters.models import ShelterData
from shelters.serializers import ShelterSerializer
from core.abstracts.viewsets import ModelViewSet

class ShelterViewSet(ModelViewSet):
    serializer_class = ShelterSerializer
    queryset = ShelterData.objects.all()


