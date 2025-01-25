from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import *

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Password is write-only

    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'first_name', 'last_name', 'phone']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)  # Hash the password
        user.save()
        return user

    def validate(self, data):
        if CustomUser.objects.filter(email=data['email']).exists():
            raise serializers.ValidationError({"message": "Email already exists"})
        return data

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['name', 'address', 'is_veg', 'phone', 'average_rating', 'description', 'image', 'table_ac', 'per_table_cost', 'open_time', 'close_time']

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['restaurant', 'is_veg', 'name', 'description', 'price', 'image']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['user', 'restaurant', 'table_no', 'no_of_person', 'booking_time', 'booking_date']

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['user', 'restaurant', 'rating', 'review']


