from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.parsers import JSONParser
from .serializers import *

# Create your views here.

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = RegistrationSerializer(data=data)
        
        if serializer.is_valid():
            user = serializer.save()  # Create a new user if the data is valid
            return Response({"message": "Registration successful"}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)