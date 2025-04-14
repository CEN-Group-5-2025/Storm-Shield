from core.abstracts.models import ModelBase
from django.db import models
from django.utils.translation import gettext_lazy as _


class AlertType(models.TextChoices):
    """Type of weather alert."""

    WEATHER = "weather", _("Weather")
    FLOOD = "flood", _("Flood")
    SERVICE = "service", _("Service")
    ROAD = "road", _("Road")
    SHELTER = "shelter", _("Shelter")
    MEDICAL = "medical", _("Medical")


class Alert(ModelBase):
    """Store info for weather alerts."""

    title = models.CharField(max_length=128)
    description = models.TextField()
    alert_type = models.CharField(choices=AlertType.choices, default=AlertType.WEATHER)
