from django.contrib.auth.models import AbstractUser
from django.db import models

# To add phone number, add email as unique identifier
class CustomUser(AbstractUser):
    phone = models.CharField(max_length=10, blank=True, null=True)
    email = models.EmailField(unique=True)
    favorite_restaurant = models.ManyToManyField('Restaurant', related_name='favorite_restaurant', blank=True)
    username = None

    USERNAME_FIELD = 'email'  # Use email as the unique identifier
    REQUIRED_FIELDS = ['first_name', 'last_name']  # Specify required fields for superuser creation

    def __str__(self):
        return self.first_name

# Model for restaurant
class Restaurant(models.Model):
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='restaurants')
    name = models.CharField(max_length=100)
    is_veg = models.BooleanField(default=True)
    phone = models.CharField(max_length=10)
    average_rating = models.FloatField(null=True, blank=True)
    description = models.TextField(blank=True)
    restaurant_image = models.ImageField(upload_to='restaurant_images/', blank=True, null=True)
    food_image = models.ImageField(upload_to='food_images/', blank=True, null=True)
    other_image = models.ImageField(upload_to='other_images/', blank=True, null=True)
    open_time = models.TimeField()
    close_time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Address(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='addresses')
    shop = models.TextField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.address

# Model for menu
class Menu(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='menus')
    is_veg = models.BooleanField(default=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='menu_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Model for booking
class Booking(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='bookings')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='bookings')
    table_no = models.PositiveIntegerField()
    no_of_person = models.PositiveIntegerField()
    booking_time = models.DateTimeField()
    booking_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} - {self.restaurant.name} - {self.booking_time}'

# Model for reviews
class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='reviews')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='reviews')
    rating = models.FloatField()
    review = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} - {self.restaurant.name} - {self.rating}'

# Model for table booking    
class Table(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='tables')
    table_capacity = models.PositiveIntegerField()
    table_no = models.PositiveIntegerField()
    is_ac = models.BooleanField(default=False)
    is_reserved = models.BooleanField(default=False)
    reservation_date = models.DateField()
    reservation_time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.restaurant.name} - {self.table_no}'
    
class BankDetails(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='accounts')
    full_mane = models.CharField(max_length=100)
    account_no = models.CharField(max_length=20)
    ifsc_code = models.CharField(max_length=20)
    bank_name = models.CharField(max_length=100)
    upi_id = models.CharField(max_length=50, null = True, blank = True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):  
        return f'{self.restaurant.name} - {"xxxx"+self.account_no[-4:]}'
    
