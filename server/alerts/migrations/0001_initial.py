# Generated by Django 4.2.19 on 2025-04-14 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Alert",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("title", models.CharField(max_length=128)),
                ("description", models.TextField()),
                (
                    "alert_type",
                    models.CharField(
                        choices=[
                            ("weather", "Weather"),
                            ("flood", "Flood"),
                            ("service", "Service"),
                            ("road", "Road"),
                            ("shelter", "Shelter"),
                            ("medical", "Medical"),
                        ],
                        default="weather",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
