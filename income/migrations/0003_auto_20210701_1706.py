# Generated by Django 3.1.12 on 2021-07-01 17:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('income', '0002_auto_20210629_2010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='income',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2021, 7, 1, 17, 6, 19, 786899)),
        ),
    ]
