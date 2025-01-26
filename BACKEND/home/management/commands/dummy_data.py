import random
from datetime import time
from faker import Faker
from django.core.management.base import BaseCommand
from home.models import (
    CustomUser, Restaurant, Address, Menu, Booking, Review, Table, BankDetails
)

fake = Faker()

class Command(BaseCommand):
    help = "Populate the database with dummy data"

    def handle(self, *args, **kwargs):
        # Clear existing data
        self.stdout.write("Clearing existing data...")

        # Delete all records from the related models
        Table.objects.all().delete()
        Booking.objects.all().delete()
        Review.objects.all().delete()
        Menu.objects.all().delete()
        Address.objects.all().delete()
        Restaurant.objects.all().delete()
        CustomUser.objects.all().delete()

        # Create CustomUser data
        self.stdout.write("Creating users...")
        users = []
        for _ in range(50):  # Create 10 users
            user = CustomUser(
                email=fake.email(),
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                phone=fake.phone_number()[:10],
            )
            user.set_password("password123")  # Set the password correctly
            user.save()  # Save user
            users.append(user)  # Append to users list

        # Create Restaurant data
        self.stdout.write("Creating restaurants...")
        restaurants = []
        for _ in range(50):  # Create 5 restaurants
            owner = random.choice(users)  # Assign a random user as owner
            restaurant = Restaurant(
                owner=owner,
                name=fake.company(),
                is_veg=random.choice([True, False]),
                phone=fake.phone_number()[:10],
                average_rating=round(random.uniform(3, 5), 1),
                description=fake.text(max_nb_chars=200),
                open_time=time(10, 0),
                close_time=time(22, 0),
            )
            restaurant.save()  # Save restaurant
            restaurants.append(restaurant)  # Append to restaurants list

        # Create Address data
        self.stdout.write("Creating addresses...")
        addresses = []
        for restaurant in restaurants:
            address = Address(
                restaurant=restaurant,
                shop=fake.address(),
                city=fake.city(),
                state=fake.state(),
                pincode=fake.zipcode()
            )
            address.save()  # Save address
            addresses.append(address)
        Address.objects.bulk_create(addresses)  # Bulk save addresses

        # Create Menu data
        self.stdout.write("Creating menus...")
        menus = []
        for restaurant in restaurants:
            for _ in range(10):  # Each restaurant has 10 menu items
                menu = Menu(
                    restaurant=restaurant,
                    is_veg=random.choice([True, False]),
                    name=fake.word().capitalize(),
                    description=fake.text(max_nb_chars=100),
                    price=round(random.uniform(100, 500), 2),
                )
                menu.save()  # Save menu
                menus.append(menu)
        Menu.objects.bulk_create(menus)  # Bulk save menus

        # Create Booking data
        self.stdout.write("Creating bookings...")
        bookings = []
        for user in users:
            for _ in range(2):  # Each user makes 2 bookings
                restaurant = random.choice(restaurants)
                table_no = random.randint(1, 20)
                booking = Booking(
                    user=user,
                    restaurant=restaurant,
                    table_no=table_no,
                    no_of_person=random.randint(1, 6),
                    booking_time=fake.date_time_this_month(),
                    booking_date=fake.date_this_month()
                )
                booking.save()  # Save booking
                bookings.append(booking)
        Booking.objects.bulk_create(bookings)  # Bulk save bookings

        # Create Review data
        self.stdout.write("Creating reviews...")
        reviews = []
        for user in users:
            for restaurant in random.sample(restaurants, k=3):  # 3 reviews per user
                review = Review(
                    user=user,
                    restaurant=restaurant,
                    rating=round(random.uniform(3, 5), 1),
                    review=fake.text(max_nb_chars=200)
                )
                review.save()
                reviews.append(review)
        Review.objects.bulk_create(reviews)  # Bulk save reviews

        # Create Table data
        self.stdout.write("Creating tables...")
        tables = []
        for restaurant in restaurants:
            for i in range(1, 11):  # Each restaurant has 10 tables
                table = Table(
                    restaurant=restaurant,
                    table_capacity=random.randint(2, 8),
                    table_no=i,
                    is_ac=random.choice([True, False]),
                    is_reserved=random.choice([True, False]),
                    reservation_date=fake.date_this_month(),
                    reservation_time=fake.time()
                )
                table.save()
                tables.append(table)
        Table.objects.bulk_create(tables)  # Bulk save tables

        self.stdout.write("Dummy data created successfully!")
