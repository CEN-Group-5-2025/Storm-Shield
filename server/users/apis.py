"""
URL Patterns for users REST API.
"""

from django.urls import include, path, reverse_lazy
from django.views.generic import RedirectView

from users import viewsets

app_name = "api-users"

urlpatterns = [
    path('create/', viewsets.CreateUserView.as_view(), name='create'),
    path('token/', viewsets.CreateTokenView.as_view(), name='token'),
    path('me/', viewsets.ManageUserView.as_view(), name='me'),
]
