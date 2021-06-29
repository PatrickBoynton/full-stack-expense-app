from django.test import TestCase
from expenses.models import Expenses


# Create your tests here.
class ExpenseTests(TestCase):
    def setUp(self):
        self.expense = Expenses.objects.create(
            title='123',
            amount=1235.99,
            is_recurring=False,
            date='2021-03-29 00:15:54'
        )

    def test_expense_created(self):
        expense = Expenses.objects.get(id=1)
        self.assertEqual(expense.title, '123'),
        self.assertEqual(float(expense.amount), 1235.99),
        self.assertFalse(expense.is_recurring),
        self.assertEqual(f'{expense.date}', '2021-03-29 00:15:54+00:00')
