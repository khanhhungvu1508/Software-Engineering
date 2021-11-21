from django.contrib import admin
from .models import Account

class AccountAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'password')

# Register your models here.

admin.site.register(Account, AccountAdmin)