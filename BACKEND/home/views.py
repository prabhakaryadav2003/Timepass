from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.parsers import JSONParser
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from .models import *

# Create your views here.
@api_view(['POST'])
def login_view(request):
    """
    Authenticate the user and return a JWT token.
    """
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({"detail": "Email and password are required."}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(email=email, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({"detail": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = RegistrationSerializer(data=data)
        
        if serializer.is_valid():
            user = serializer.save()  # Create a new user if the data is valid
            return Response({"message": "Registration successful"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Restaurants
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def restaurant_list_create(request):
    if request.method == 'GET':
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        data['owner'] = request.user.id  # Set the owner as the logged-in user
        serializer = RestaurantSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Custom Permission: Check if user is the owner of the object
def is_owner(user, obj):
    return obj.owner == user

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def restaurant_detail_update_delete(request, pk):
    try:
        restaurant = Restaurant.objects.get(pk=pk)
    except Restaurant.DoesNotExist:
        return Response({'error': 'Restaurant not found'}, status=status.HTTP_404_NOT_FOUND)

    # Check object-level permission
    if not is_owner(request.user, restaurant):
        return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

    if request.method == 'GET':
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = RestaurantSerializer(restaurant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        restaurant.delete()
        return Response({'message': 'Restaurant deleted'}, status=status.HTTP_204_NO_CONTENT)


# Address
@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def address_list_create(request, restaurant_pk):
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_pk)
    except Restaurant.DoesNotExist:
        return Response({'error': 'Restaurant not found'}, status=status.HTTP_404_NOT_FOUND)

    if not is_owner(request.user, restaurant):
        return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

    if request.method == 'GET':
        addresses = restaurant.addresses.all()
        serializer = AddressSerializer(addresses, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        data['restaurant'] = restaurant.id
        serializer = AddressSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Menu
@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def menu_list_create(request, restaurant_pk):
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_pk)
    except Restaurant.DoesNotExist:
        return Response({'error': 'Restaurant not found'}, status=status.HTTP_404_NOT_FOUND)

    if not is_owner(request.user, restaurant):
        return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

    if request.method == 'GET':
        menus = restaurant.menus.all()
        serializer = MenuSerializer(menus, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        data['restaurant'] = restaurant.id
        serializer = MenuSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Booking
@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def booking_list_create(request):
    if request.method == 'GET':
        bookings = Booking.objects.filter(user=request.user)
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        data['user'] = request.user.id  # Assign the logged-in user as the one making the booking
        serializer = BookingSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def booking_detail_update_delete(request, pk):
    try:
        booking = Booking.objects.get(pk=pk)
    except Booking.DoesNotExist:
        return Response({'error': 'Booking not found'}, status=status.HTTP_404_NOT_FOUND)

    if booking.user != request.user:
        return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

    if request.method == 'GET':
        serializer = BookingSerializer(booking)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = BookingSerializer(booking, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        booking.delete()
        return Response({'message': 'Booking deleted'}, status=status.HTTP_204_NO_CONTENT)


# Reviews
@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def review_list_create(request, restaurant_pk):
    try:
        restaurant = Restaurant.objects.get(pk=restaurant_pk)
    except Restaurant.DoesNotExist:
        return Response({'error': 'Restaurant not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        reviews = restaurant.reviews.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        data['restaurant'] = restaurant.id
        data['user'] = request.user.id
        serializer = ReviewSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
