from django.contrib import admin
from .models import SideFood

class SideFoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description', 'category', 'src')

# Register your models here.

admin.site.register(SideFood, SideFoodAdmin)