from core.abstracts.viewsets import ModelViewSetBase
from posts.models import PostBase
from posts.serializers import PostSerializer


# Create your views here.
class PostViewSet(ModelViewSetBase):
    serializer_class = PostSerializer
    queryset = PostBase.objects.all()

    def perform_create(self, serializer):

        serializer.save(author=self.request.user)
