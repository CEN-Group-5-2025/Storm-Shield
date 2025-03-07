from django.db import models
from typing import ClassVar

 
class WeatherData():
    station_name = models.CharField(max_length=255, blank=False, null=False)
    precip_inches = models.IntegerField(blank=False, null=False)
    lat = models.FloatField(blank=False, null=False)
    long = models.FloatField(blank=False, null=False)

# Create your models here.
