from django.db import models

from core.abstracts.models import ModelBase
from users.models import User


# Create your models here.
class PostBase(ModelBase):
    # author = models.CharField()
    title = models.CharField(null=False, max_length=20)
    content = models.CharField(null=False, max_length=255)
    votes = models.IntegerField(default=0)

    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return f'"{self.title}" by {self.author}'

    @property
    def timestamp(self):
        return self.created_at

    @property
    def avatar(self):
        if self.author.first_name or self.author.last_name:
            return f"{self.author.first_name[0] or ''}{self.author.last_name[0] or ''}".strip().capitalize()
        else:
            return self.author.email[0].capitalize()
