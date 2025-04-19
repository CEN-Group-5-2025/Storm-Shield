from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register("alerts", views.AlertViewSet, basename="alert")

app_name = "alerts"

urlpatterns = [path("", include(router.urls))]
