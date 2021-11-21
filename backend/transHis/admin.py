from django.contrib import admin
from .models import TransHis

class TransHisAdmin(admin.ModelAdmin):
    list_display = ('uid', 'when', 'product', 'total', 'status')

# Register your models here.

admin.site.register(TransHis, TransHisAdmin)