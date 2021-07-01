from rest_framework import serializers
from .models import Expenses


class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = ('id', 'title', 'amount', 'date_created',)


class ExpensesDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = ('id', 'date_created', )
