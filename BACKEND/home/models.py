from django.contrib.auth.models import User
from django.db import models


class Restaurant(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='restaurants')
    name = models.CharField(max_length=100)
    address = models.TextField()
    is_veg = models.BooleanField(default=True)
    phone = models.CharField(max_length=10)
    average_rating = models.FloatField(null=True, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='restaurant_images/', blank=True, null=True)
    table_ac = models.PositiveIntegerField()
    per_table_cost = models.PositiveIntegerField()
    open_time = models.TimeField()
    close_time = models.TimeField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Menu(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='menus')
    is_veg = models.BooleanField(default=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='menu_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='bookings')
    table_no = models.PositiveIntegerField()
    no_of_person = models.PositiveIntegerField()
    booking_time = models.DateTimeField()
    booking_date = models.DateField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user.username} - {self.restaurant.name} - {self.booking_time}'

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='reviews')
    rating = models.FloatField()
    review = models.TextField()
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user.username} - {self.restaurant.name} - {self.rating}'