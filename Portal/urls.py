"""Portal URL Configuration
"""

from django.contrib import admin
from django.urls import include, path
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic.base import RedirectView
from django.views.decorators.http import require_GET

admin.site.site_header = settings.TITLE
admin.site.site_title = settings.TITLE


@require_GET
def favicon(request):
    from textwrap import dedent
    from django.http import HttpResponse
    import base64

    icon = """\
    AAABAAEAEBACAAEAAQCwAAAAFgAAACgAAAAQAAAAIAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAA
    AAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    AAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/
    /wAA//8AAP//AAD//wAA//8AAP//AAD//wAA"""
    icon = dedent(icon)
    icon = base64.b64decode(icon)

    return HttpResponse(icon, content_type="image/x-icon")

urlpatterns = [
    path("", include("django_prometheus.urls")),
    # favicon
    path("favicon.ico", favicon, name="favicon"),
    path("admin/", admin.site.urls), 
]


# i18n urls for language change
urlpatterns += i18n_patterns(
    path("i18n/", include("django.conf.urls.i18n")),
    path("sepa", include("paymentoptions.urls")),
    path("cancellation", include("cancellation.urls")),
)

if 'dashboard' in settings.INSTALLED_APPS:
    urlpatterns += i18n_patterns(
        path("accounts/", include("django.contrib.auth.urls")),
        path("", RedirectView.as_view(url="dashboard/main/")),
        path("dashboard/", include("dashboard.urls")),
    )

handler404 = "paymentoptions.views.error_404"
handler403 = "paymentoptions.views.error_403"
handler400 = "paymentoptions.views.error_400"
handler500 = "paymentoptions.views.error_500"
# add static folder for css and js
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# add media folder
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
