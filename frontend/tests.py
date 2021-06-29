from django.test import TestCase, SimpleTestCase
from django.urls import reverse, resolve
from .views import IndexView


# Create your tests here.
class IndexViewTest(SimpleTestCase):
    def setUp(self):
        url = reverse('frontend:index')
        self.response = self.client.get(url)

    def test_index_response(self):
        self.assertEqual(self.response.status_code, 200)

    def test_index_url_resolves_index_view(self):
        view = resolve('/')
        self.assertEqual(view.func.__name__, IndexView.as_view().__name__)
