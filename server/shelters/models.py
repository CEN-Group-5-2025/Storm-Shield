import black
from django.db import models
from core.abstracts.models import ModelBase

# Create your models here.
class ShelterData(ModelBase):
    shelter_name = models.CharField(max_length=255)
    shelter_addy = models.CharField(max_length=255)
    shelter_city = models.CharField(max_length=255)
    capacity = models.PositiveIntegerField()
    occupancy = models.PositiveIntegerField()
    lat = models.FloatField()
    long = models.FloatField()
    amenities = models.CharField(max_length=255)
