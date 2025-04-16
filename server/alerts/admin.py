from alerts.models import Alert
from core.abstracts.admin import ModelAdminBase
from django.contrib import admin


class AlertAdmin(ModelAdminBase):
    """Manage alerts in admin dashboard."""

    list_display = ("title", "alert_type", "updated_at")


admin.site.register(Alert, AlertAdmin)
