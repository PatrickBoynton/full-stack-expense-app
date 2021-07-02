from django.urls import path
from .views import ExpenseListView

app_name = 'expenses'

urlpatterns = [
    path('', ExpenseListView.as_view()),
]
