from django.contrib import admin
from .models import MainFood

class MainFoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description', 'category', 'src')

# Register your models here.

admin.site.register(MainFood, MainFoodAdmin)