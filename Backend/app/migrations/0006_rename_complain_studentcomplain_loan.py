# Generated by Django 5.0.4 on 2024-05-04 02:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_studentcomplain_term'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentcomplain',
            old_name='complain',
            new_name='loan',
        ),
    ]