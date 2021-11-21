from django.db import models

# Create your models here.

class SideFood(models.Model):
    name = models.CharField(max_length=120)
    price = models.IntegerField()
    description = models.TextField()
    category = models.CharField(max_length=120)
    src = models.TextField()

    def _str_(self):
        return self.title