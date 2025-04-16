from django.contrib import admin


class ModelAdminBase(admin.ModelAdmin):
    """Base class for all model admins."""

    prefetch_related_fields = []
    select_related_fields = []
    readonly_fields = ["created_at", "updated_at"]

    ###########################
    # Django method overrides #
    ###########################

    def get_queryset(self, request):
        qs = super().get_queryset(request)

        if len(self.prefetch_related_fields) > 0:
            return qs.prefetch_related(*self.prefetch_related_fields).select_related(*self.select_related_fields)
        else:
            return qs
