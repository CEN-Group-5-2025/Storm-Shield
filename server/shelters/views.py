from core.abstracts.viewsets import ModelViewSet
from shelters.models import ShelterData
from shelters.serializers import ShelterSerializer


class ShelterViewSet(ModelViewSet):
    serializer_class = ShelterSerializer
    queryset = ShelterData.objects.all()
