import datetime

from rest_framework import serializers
from .models import Expenses


class ExpensesSerializer(serializers.ModelSerializer):
    date_created = serializers.DateTimeField(format='%Y-%m-%d %H:%M')

    class Meta:
        model = Expenses
        fields = ('id', 'title', 'amount', 'date_created',)


class ExpensesDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = ('id', 'date_created',)
