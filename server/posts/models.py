from django.db import models
from core.abstracts.models import ModelBase


# Create your models here.
class PostBase(ModelBase):
    author = models.CharField()
    title = models.CharField(max_length=20)
    content = models.CharField(max_length=255)
    votes = models.IntegerField()
    '''POSSIBLY WORK ON USERVOTE'''
    avatar = models.CharField(max_length=1)

    def __str__(self):
        return f'"{self.title}" by {self.author}'

    @property
    def timestamp(self):
        return self.created_at
