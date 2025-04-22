
# Create your views here.
from rest_framework.viewsets import ModelViewSet

# from core.abstracts.viewsets import ModelViewSet
from posts.models import PostBase
from posts.serializers import PostBaseSerializer


class PostViewSet(ModelViewSet):
    serializer_class = PostBaseSerializer
    queryset = PostBase.objects.all()
