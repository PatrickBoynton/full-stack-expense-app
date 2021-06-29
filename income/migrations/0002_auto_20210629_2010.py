# Generated by Django 3.1.12 on 2021-06-29 20:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('income', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='income',
            name='amount',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=9),
        ),
        migrations.AddField(
            model_name='income',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 6, 29, 20, 10, 45, 263428)),
        ),
        migrations.AddField(
            model_name='income',
            name='is_recurring',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='income',
            name='title',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]