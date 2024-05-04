from django.db import models

# Create your models here.

class Student(models.Model):
    student_id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50)
    email=models.EmailField(max_length=100)
    password=models.CharField(max_length=50)
    age=models.CharField(max_length=50)
    fname=models.CharField(max_length=50)
    mname=models.CharField(max_length=50)


class StudentComplain(models.Model):
    stu_id=models.AutoField(primary_key=True)
    loan=models.CharField(max_length=500)
    pay=models.CharField(max_length=500,null=True,blank=True)
    ans=models.CharField(max_length=250,null=True,blank=True)
    name=models.CharField(max_length=50)
    time=models.CharField(max_length=500)
    admintime=models.CharField(max_length=500)
    term=models.CharField(max_length=100,null=True,blank=True)
    



class Admin(models.Model):
    admin_id=models.AutoField(primary_key=True)
    adminname=models.CharField(max_length=250)
    adminpassword=models.CharField(max_length=250)
    adminemail=models.EmailField(max_length=100)

    
