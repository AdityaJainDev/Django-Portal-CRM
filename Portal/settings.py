"""
Django settings for Portal project.

Generated by 'django-admin startproject' using Django 2.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

import os
import sys
from prometheus_client import Info

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: don't run with debug turned on in production!
SECRET_KEY = os.getenv("secretKey", "g4g-3$@r0*#k(yw!#nai9^zrv1sc*ao$5-$ouxv@m6%%@lys2p")

DEBUG = os.getenv("DJANGO_DEBUG", 'False').lower() == 'true'

ALLOWED_HOSTS = ["localhost", os.getenv("ALLOWED_HOSTS"), os.getenv("POD_IP")]

CSRF_TRUSTED_ORIGINS = ['https://*.aditsystems.dev', 'https://*.aditsystems.de']


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.humanize",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django_countries",
    "phonenumber_field",
    "localflavor",
    "compressor",
    "crispy_forms",
    "django_prometheus",
    "paymentoptions",
    "dashboard",
    "cancellation",
]

if os.getenv("dashboard", 'True').lower() == 'false':
    INSTALLED_APPS.remove("dashboard")

MIDDLEWARE = [
    "django_prometheus.middleware.PrometheusBeforeMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django_prometheus.middleware.PrometheusAfterMiddleware",
    "xff.middleware.XForwardedForMiddleware",
]

XFF_TRUSTED_PROXY_DEPTH = 1

class XForwardedForMiddleware():
    def process_request(self, request):
        if request.META.has_key("HTTP_X_FORWARDED_FOR"):
            request.META["HTTP_X_PROXY_REMOTE_ADDR"] = request.META["REMOTE_ADDR"]
            parts = request.META["HTTP_X_FORWARDED_FOR"].split(",", 1)
            request.META["REMOTE_ADDR"] = parts[0]

TITLE = "AD IT Systems Portal"

ROOT_URLCONF = "Portal.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "Portal.context_processors.site_id",
            ],
        },
    },
]

WSGI_APPLICATION = "Portal.wsgi.application"


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases
DATABASES = {
    'default': {
        'ENGINE': os.getenv('DB_ENGINE', 'django.db.backends.sqlite3'),
        'NAME': os.getenv("DB_NAME", 'db.sqlite3'),
        'USER': os.getenv("DB_USER"),
        'PASSWORD': os.getenv("DB_PASS"),
        'HOST': os.getenv("DB_HOST"),
        'PORT': os.getenv("DB_PORT"),
    }
}
# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]
# Logging Configuration
# https://docs.djangoproject.com/en/3.0/topics/logging
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "level": os.getenv("logging_console", "INFO"),
            "class": "logging.StreamHandler",
            "stream": sys.stdout,
            "formatter": "verbose",
        },
    },
    "formatters": {
        "verbose": {
            "format": "{levelname}: {asctime} {module} {filename} {funcName} {lineno} {message}",
            "style": "{",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "propagate": True,
            "level": os.getenv("logging_django", "INFO"),
        },
    },
}


# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGES = (
    ("de", "Deutsch"),
    ("en", "English"),
)

LANGUAGE_CODE = "de"

LOCALE_PATHS = (os.path.join(BASE_DIR, "locale"),)

TIME_ZONE = "Europe/Berlin"

PHONENUMBER_DEFAULT_REGION = "DE"

USE_TZ = True
USE_I18N = True
USE_L10N = True

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]
COMPRESS_OFFLINE = True
COMPRESS_ENABLED = True

STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
    "compressor.finders.CompressorFinder",
]
COMPRESS_PRECOMPILERS = (("text/x-scss", "django_libsass.SassCompiler"),)

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
    "dashboard.backends.CustomerBackend",
]

SITE_ID = os.getenv("SITE_ID", 22)

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "kunden.aditsystems.de"
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.getenv("EMAIL_HOST")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_PASSWORD")

EMAIL_FROM = os.getenv("EMAIL_FROM", "AD IT Systems <support@aditsystems.de>")

EMAIL_SUPPORT = os.getenv("EMAIL_SUPPORT", "support@aditsystems.de")

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

CRM_ENDPOINT = os.getenv("ENDPOINT_URL", "https://ascrm-api.aditsystems.de/")

LOGIN_REDIRECT_URL = '/dashboard/main/'
LOGOUT_REDIRECT_URL = '/accounts/login/'

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://redis:6379/0",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            "SOCKET_CONNECT_TIMEOUT": 5,
            "SOCKET_TIMEOUT": 5,
        }
    }
}

DJANGO_REDIS_IGNORE_EXCEPTIONS = True

def get_service_version():
    VERSIONFILE = os.path.join(BASE_DIR, "VERSION")
    if os.path.exists(VERSIONFILE):
        with open(VERSIONFILE, "r") as v:
            return v.readline().strip()
    else:
        return "dev"

VERSION = get_service_version()

i = Info("portal_version", "Portal Version Info")
i.info({"version": VERSION})


try:
    from .local_settings import *
except ImportError:
    pass
