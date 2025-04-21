from django.db import models

from core.abstracts.models import ModelBase


# Create your models here.
class ShelterData(ModelBase):
    name = models.CharField(max_length=255)
    addy = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    capacity = models.PositiveIntegerField()
    occupancy = models.PositiveIntegerField()
    lat = models.FloatField()
    long = models.FloatField()
    amenities = models.CharField(max_length=255)
