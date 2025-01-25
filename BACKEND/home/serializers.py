import re
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
        if re.match(r'^[6-9]\d{9}$', data['phone']) is None:
            raise serializers.ValidationError({"message": "Phone number is invalid"})
        return data

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        ffields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = '__all__'

class BankDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankDetails
        fields = '__all__'