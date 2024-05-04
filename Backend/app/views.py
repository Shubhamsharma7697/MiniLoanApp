from django.shortcuts import render,HttpResponse
from rest_framework import viewsets
from .serializers import StudentSerializer,StudentComplainSerializer,AdminSerializers
from .models import Student,StudentComplain,Admin
from django.http import JsonResponse

def home(request):
    return HttpResponse("<h1>Welcome</h1>")



class StudentViewSet(viewsets.ModelViewSet):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer



class StudentComplainViewSet(viewsets.ModelViewSet):
    queryset=StudentComplain.objects.all()
    serializer_class=StudentComplainSerializer



class AdminViewSet(viewsets.ModelViewSet):
    queryset=Admin.objects.all()
    serializer_class=AdminSerializers




