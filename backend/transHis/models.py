from django.db import models

# Create your models here.

class TransHis(models.Model):
    uid = models.IntegerField()
    when = models.TextField()
    product = models.TextField()
    total = models.IntegerField()
    status = models.TextField()

    def _str_(self):
        return self.title