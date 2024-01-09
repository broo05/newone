# Generated by Django 5.0 on 2023-12-30 07:44

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="LoveEntry",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("girl_name", models.CharField(max_length=100)),
                ("boy_name", models.CharField(max_length=100)),
                ("love_percentage", models.IntegerField()),
            ],
        ),
    ]
