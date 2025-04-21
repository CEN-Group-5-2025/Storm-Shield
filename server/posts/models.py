from asyncio.windows_events import NULL
from pyexpat import model
import time
from django.db import models
from django.template.defaultfilters import length
from core.abstracts.models import ModelBase

# Create your models here.
class PostBase(ModelBase):
    author = models.CharField()
    title = models.CharField(null=False, max_length=20)
    content = models.CharField(null=False, max_length=255)
    votes = models.IntegerField()
    '''POSSIBLY WORK ON USERVOTE'''
    avatar = models.CharField(max_length=1)

    @property
    def timestamp(self):
        return self.created_at
