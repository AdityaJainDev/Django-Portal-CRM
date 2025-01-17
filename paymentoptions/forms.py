from django import forms
from localflavor.generic.forms import BICFormField, IBANFormField
from django.utils.translation import gettext_lazy as _

PAYMENT_CHOICES = (
    ("0", _("Bank Transfer")),
    ("1", _("Direct Debit")),
)

class PaymentForm(forms.Form):
    customer_number = forms.CharField(
        label=_("CustomerNumber"), max_length=100, required=False
    )
    payment_options = forms.MultipleChoiceField(
        label=_("PaymentOptions"),
        choices=PAYMENT_CHOICES,
        widget=forms.CheckboxSelectMultiple(),
    )
    owner = forms.CharField(label=_("owner"), max_length=100, required=False)
    iban = IBANFormField(label=_("iban"), required=False)
    bic = BICFormField(label=_("bic"), required=False)
    confirm = forms.BooleanField(label=_("Accept"), required=False)

