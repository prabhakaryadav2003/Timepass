from django.urls import path
from .views import *

urlpatterns = [
    # Authentication
    path('auth/login/', login_view, name='login'),
    path('auth/register/', register, name='register'),

    # Restaurants
    path('restaurants/', restaurant_list, name='restaurant_list'),
    path('restaurants/add/', restaurant_create, name='restaurant_create'),
    path('restaurants/<int:pk>/', restaurant_detail, name='restaurant_detail'),
    path('restaurants/<int:pk>/add', restaurant_update_delete, name='restaurant_edit'),

    # Addresses
    path('restaurants/addresses/<str:city>', address_search, name='address_search'),
    path('restaurants/<int:restaurant_pk>/addresses/', address_list, name='address_list'),
    path('restaurants/<int:restaurant_pk>/addresses/add', address_create, name='address_create'),

    # Menus
    path('restaurants/<int:restaurant_pk>/menus/', menu_list_create, name='menu_list_create'),

    # Bookings
    path('bookings/', booking_list_create, name='booking_list_create'),
    path('bookings/<int:pk>/', booking_detail_update_delete, name='booking_detail_update_delete'),

    # Reviews
    path('restaurants/<int:restaurant_pk>/reviews/', review_list_create, name='review_list_create'),
]