# Generated by Django 4.2.20 on 2025-04-14 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("weather", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="weatherdata",
            name="precip_inches",
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name="weatherdata",
            name="station_name",
            field=models.CharField(),
        ),
    ]
