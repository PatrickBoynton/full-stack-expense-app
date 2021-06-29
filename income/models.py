from django.db import models
from datetime import datetime


# Create your models here.
class Income(models.Model):
    title = models.CharField(max_length=150,
                             null=True,
                             blank=True)
    amount = models.DecimalField(decimal_places=2,
                                 max_digits=9,
                                 default=0)
    is_recurring = models.BooleanField(default=False)
    date = models.DateTimeField(default=datetime.today())

    def __str__(self):
        return self.title + ' ' + str(self.date)
