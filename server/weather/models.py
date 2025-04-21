from django.db import models
from core.abstracts.models import ModelBase


class WeatherData(ModelBase):
    station_name = models.CharField()
    precip_inches = models.FloatField()
    lat = models.FloatField()
    long = models.FloatField()


# Create your models here.
