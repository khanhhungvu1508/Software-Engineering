from django.db import models

# Create your models here.

class MainFood(models.Model):
    name = models.CharField(max_length=120)
    price = models.IntegerField()
    description = models.TextField()
    src = models.TextField()
    category = models.CharField(max_length=120)

    def _str_(self):
        return self.title