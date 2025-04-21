"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from app.settings import DEBUG

apipatterns = [
    path("schema/", SpectacularAPIView.as_view(), name="api-schema"),
    path(
        "docs/",
        SpectacularSwaggerView.as_view(url_name="api-schema"),
        name="api-docs",
    ),
    path("user/", include("users.apis")),
    path("shelters/", include("shelters.urls")),
    path("alert/", include("alerts.urls")),
    path("post/", include("posts.urls")),
]

urlpatterns = [
    path("", include("core.urls")),
    path("admin/", admin.site.urls),
    path("api/", include(apipatterns)),
]

handler404 = "core.views.custom404"

if DEBUG:
    from debug_toolbar.toolbar import debug_toolbar_urls

    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
    urlpatterns += debug_toolbar_urls()
    urlpatterns.append(
        path("__reload__/", include("django_browser_reload.urls")),
    )
