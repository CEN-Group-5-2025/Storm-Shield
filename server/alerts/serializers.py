"""
JSON Specs for Alerts.
"""

from rest_framework import serializers

from alerts.models import Alert


class AlertSerializer(serializers.ModelSerializer):
    """Json view for alerts."""

    class Meta:
        model = Alert
        fields = "__all__"
