"""
JSON Specs for Alerts.
"""

from alerts.models import Alert
from rest_framework import serializers


class AlertSerializer(serializers.ModelSerializer):
    """Json view for alerts."""

    class Meta:
        model = Alert
        fields = "__all__"
