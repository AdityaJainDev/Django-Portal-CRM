from django.shortcuts import render
from .forms import PaymentForm
from django.http import HttpResponse, HttpResponseRedirect
import requests
from django.utils.translation import gettext as _
from django.contrib import messages
from django.conf import settings
from django.views.decorators.http import require_GET

# Create your views here.\
@require_GET
def index(request):
    return render(request, "base.html")

@require_GET
def sepa_payment(request):

    if request.method == 'GET':
        account_number = request.GET.get('knr', None)
        token = request.GET.get('token', None)
        data = {'knr':account_number, 'token':token}
        save_data = requests.get(settings.CRM_ENDPOINT + "SEPA/", params=data).json()

        if save_data['status'] == -1:
            return HttpResponse(_('Token Message'))
        else:
            form = PaymentForm()
            form.initial['account_number'] = request.GET.get('knr', None)
            form.initial['options'] = "1"

    elif request.method == 'POST':
        form = PaymentForm(request.POST)
        if form.is_valid():
            account_number = request.GET.get('knr', None)
            owner = form.cleaned_data['owner']
            iban = form.cleaned_data['iban']
            bic = form.cleaned_data['bic']
            options = form.cleaned_data['options']
            token = request.GET.get('token', None)

            data = {"inhaber": owner, "iban": iban, "bic": bic, 'knr':account_number, 'token':token, 'zahlungsart':options}
            save_data = requests.post(settings.CRM_ENDPOINT + "SEPA/", data)
    
            if save_data.json()['status'] == -1:
                messages.error(request, _('Error Message'))
                form = PaymentForm()
                form.initial['account_number'] = request.GET.get('knr', None)
                form.initial['options'] = "1"
                return HttpResponseRedirect(request.META.get('HTTP_REFERER'), {'form':form})
            else:
                return HttpResponse(_('Success Message'))
        else:
            messages.error(request, _('Error Message'))
            form = PaymentForm()
            form.initial['account_number'] = request.GET.get('knr', None)
            form.initial['options'] = "1"

    context = {'form':form}

    return render(request, "payment.html", context)