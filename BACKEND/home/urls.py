from django.urls import path
from .views import *

urlpatterns = [
    # Register
    path('register/', register, name='register'),

    # Login
    path('login/', login_view, name='login'),
    
    # Restaurants
    path('restaurants/', restaurant_list_create, name='restaurant-list-create'),
    path('restaurants/<int:pk>/', restaurant_detail_update_delete, name='restaurant-detail-update-delete'),

    # Addresses
    path('restaurants/<int:restaurant_pk>/addresses/', address_list_create, name='address-list-create'),

    # Menus
    path('restaurants/<int:restaurant_pk>/menus/', menu_list_create, name='menu-list-create'),

    # Bookings
    path('bookings/', booking_list_create, name='booking-list-create'),
    path('bookings/<int:pk>/', booking_detail_update_delete, name='booking-detail-update-delete'),

    # Reviews
    path('restaurants/<int:restaurant_pk>/reviews/', review_list_create, name='review-list-create'),
]