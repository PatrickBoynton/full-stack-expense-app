from django.db import models
from datetime import datetime


# Create your models here.
class Expenses(models.Model):
    title = models.CharField(max_length=150)
    amount = models.DecimalField(decimal_places=2,
                                 max_digits=9,
                                 default=0)
    is_recurring = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.today())

    def __str__(self):
        return self.title + ' ' + str(self.date)
