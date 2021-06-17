from .serializers import ExpensesSerializer
from django.shortcuts import render
from rest_framework import generics
from .models import Expenses


# Create your views here.
class ExpenseListView(generics.ListAPIView):
    serializer_class = ExpensesSerializer
    queryset = Expenses.objects.all()
