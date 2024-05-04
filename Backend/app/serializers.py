from .models import Student,StudentComplain,Admin
from rest_framework import serializers



class StudentSerializer(serializers.HyperlinkedModelSerializer):
    student_id=serializers.ReadOnlyField()
    class Meta:
        model=Student
        fields="__all__"

class StudentComplainSerializer(serializers.HyperlinkedModelSerializer):
    stu_id=serializers.ReadOnlyField()
    class Meta:
        model=StudentComplain
        fields=['loan','stu_id','time','admintime','ans','name','term','pay']
        extra_kwargs={'ans':{'required':False}}



class AdminSerializers(serializers.HyperlinkedModelSerializer):
    admin_id=serializers.ReadOnlyField()
    class Meta:
        model=Admin
        fields="__all__"
