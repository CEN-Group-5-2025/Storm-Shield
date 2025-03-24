from django.db import models
from typing import ClassVar

from core.abstracts.models import ModelBase

 
class WeatherData(ModelBase):
    station_name = models.CharField(max_length=255, blank=False, null=False)
    precip_inches = models.FloatField(blank=False, null=False)
    lat = models.FloatField(blank=False, null=False)
    long = models.FloatField(blank=False, null=False)

# Create your models here.
