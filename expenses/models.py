from django.db import models


# Create your models here.
class Expenses(models.Model):
    title = models.CharField(max_length=150)
    amount = models.DecimalField(decimal_places=2, max_digits=9)
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.title + ' ' + str(self.date)
