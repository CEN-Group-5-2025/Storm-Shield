"""
Alerts API Views.
"""

from alerts.models import Alert
from alerts.serializers import AlertSerializer
from core.abstracts.viewsets import ModelViewSetBase


class AlertViewSet(ModelViewSetBase):
    """API CRUD routes for alerts."""

    serializer_class = AlertSerializer
    queryset = Alert.objects.all()
