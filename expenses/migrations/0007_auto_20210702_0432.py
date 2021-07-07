# Generated by Django 3.1.12 on 2021-07-02 04:32

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('expenses', '0006_auto_20210702_0429'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='expenses',
            name='year',
        ),
        migrations.AlterField(
            model_name='expenses',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2021, 7, 2, 4, 32, 31, 558817, tzinfo=utc)),
        ),
    ]