from django.urls import path

from .views import (
    ContactCreateview,
    ContactListView,
    ContactDeleteView
)

urlpatterns  = [
    path('create/',ContactCreateview.as_view(), name='create-contact'),
    path('contact/',ContactListView().as_view(),name='list-contact'),
    path('contact/<int:contact_id>/',ContactDeleteView.as_view(),name='delete-contact'),
]