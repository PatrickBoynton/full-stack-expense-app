from django.urls import path
from .views import ExpenseListView, ExpenseDateListView

app_name = 'expenses'

urlpatterns = [
    path('', ExpenseListView.as_view()),
    path('dates/', ExpenseDateListView.as_view())
]
