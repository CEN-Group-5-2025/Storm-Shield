from django.shortcuts import render
from django.db.models import query
from yaml import serialize_all
from posts.models import PostBase
from posts.serializers import PostSerializer
from core.abstracts.viewsets import ModelViewSet

# Create your views here.
class PostViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = PostBase.objects.all()