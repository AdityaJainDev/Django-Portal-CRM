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

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: don't run with debug turned on in production!
SECRET_KEY = "g4g-3$@r0*#k(yw!#nai9^zrv1sc*ao$5-$ouxv@m6%%@lys2p" 

DEBUG = True

# Application definition
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.humanize",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "elasticapm.contrib.django",
    "adminsortable",
    "detailsPage",
    "dashboard",
    'localflavor',
    "compressor",
    'crispy_forms',
    "markdownfield",
    "rest_framework",
    "django_prometheus",
]

MIDDLEWARE = [
    "django_prometheus.middleware.PrometheusBeforeMiddleware",
    
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "elasticapm.contrib.django.middleware.TracingMiddleware",

    "django_prometheus.middleware.PrometheusAfterMiddleware"
]

TITLE = "AD IT Systems Portal"
OTP_TOTP_ISSUER = TITLE

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
            ],
        },
    },
]

WSGI_APPLICATION = "Portal.wsgi.application"


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
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
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'stream': sys.stdout,
            'formatter': 'verbose'
        },
        'file': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, "debug.log"),
            'formatter': 'verbose'
        },
    },
    'formatters': {
        'verbose': {
            'format': "{levelname}: {asctime} {module} {filename} {funcName} {lineno} {message}",
            'style': '{',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', "file"],
            'propagate': True,
            'level': 'INFO',
        },
    },
}


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAdminUser',
    ]
}

# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGES = (
    ("de", "Deutsch"),
    ("en", "English"),
)
LANGUAGE_CODE = "de"

LOCALE_PATHS = (os.path.join(BASE_DIR, "locale"),)

TIME_ZONE = "UTC"

USE_TZ = True
USE_I18N = True
USE_L10N = True

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
]

COMPRESS_PRECOMPILERS = (
    ('text/x-scss', 'django_libsass.SassCompiler'),
)

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'dashboard.backends.CustomerBackend',
]


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'kunden.aditsystems.de'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = None
EMAIL_HOST_PASSWORD = None

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CRM_ENDPOINT = "https://ascrm.aditsystems.de/api/Kunden/"

LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

ELASTIC_APM = {
    'SERVICE_NAME': 'portal',
    'DISABLE_METRICS': '*',
    'CENTRAL_CONFIG': False,
    'DEBUG': True,
}

try:
    from .local_settings import *
except ImportError:
    pass
