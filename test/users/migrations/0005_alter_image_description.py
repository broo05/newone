# Generated by Django 5.0 on 2024-01-09 21:37

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0004_imagecategory_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="image",
            name="description",
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]