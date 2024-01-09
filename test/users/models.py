# appname/models.py
from django.db import models


class ImageCategory(models.Model):
    name = models.CharField(max_length = 250)

    def __str__(self) -> str:
        return self.name


class Image(models.Model):
    category = models.ForeignKey(ImageCategory, on_delete = models.CASCADE)
    image = models.ImageField(upload_to = 'images/')
    title = models.CharField(max_length  = 250)
    description = models.CharField(max_length = 300, null = True, blank = True)

    def __str__(self):
        return self.title
    