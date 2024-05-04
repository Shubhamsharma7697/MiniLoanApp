from .views import *
from django.urls import path,include
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'customers',StudentViewSet)
router.register(r'customerloan',StudentComplainViewSet)
router.register(r'adminlogin',AdminViewSet)


urlpatterns = [
    path('',home,name='home'),
    path('',include(router.urls)),
 
     
   
]