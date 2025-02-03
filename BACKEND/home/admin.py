from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Restaurant)
admin.site.register(Address)
admin.site.register(Menu)
admin.site.register(Booking)
admin.site.register(Review)
admin.site.register(Table)
admin.site.register(BankDetails)