from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("posts", views.PostViewSet, basename="posts")
app_name = "posts"
urlpatterns = [path("", include(router.urls))]
