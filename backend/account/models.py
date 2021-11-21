from django.db import models

# Create your models here.

class Account(models.Model):
    name = models.CharField(max_length=120)
    email = models.TextField()
    password = models.CharField(max_length=120)

    def _str_(self):
        return self.title