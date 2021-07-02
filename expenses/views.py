from .serializers import ExpensesSerializer
from rest_framework import generics
from .models import Expenses
import pytz


# Create your views here.
class ExpenseListView(generics.ListAPIView):
    serializer_class = ExpensesSerializer
    queryset = Expenses.objects.all()
