# Generated by Django 5.0.4 on 2024-05-04 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_studentcomplain_pay'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentcomplain',
            name='pay',
            field=models.CharField(max_length=500),
        ),
    ]
