# Generated by Django 5.0.2 on 2024-02-06 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=100)),
                ('password', models.CharField(max_length=50)),
                ('age', models.CharField(max_length=50)),
                ('fname', models.CharField(max_length=50)),
                ('mname', models.CharField(max_length=50)),
            ],
        ),
    ]
