from django.test import TestCase
from .models import Income


# Create your tests here.
class IncomeTests(TestCase):
    def setUp(self):
        self.income = Income.objects.create(
            title='Test title',
            amount=123,
            is_recurring=False,
            date='2021-03-29 00:15:54'
        )

    def test_income_creation(self):
        income = Income.objects.get(id=1)
        self.assertEqual(income.title, 'Test title')
        self.assertEqual(income.amount, 123)
        self.assertFalse(income.is_recurring, False)
        self.assertEqual(f'{income.date}', '2021-03-29 00:15:54+00:00')
