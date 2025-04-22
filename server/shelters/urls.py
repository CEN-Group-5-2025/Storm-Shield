from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("shelters", views.ShelterViewSet, basename="shelters")
app_name = "shelters"
urlpatterns = [path("", include(router.urls))]
