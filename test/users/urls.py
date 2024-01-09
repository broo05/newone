# appname/urls.py
from django.urls import path, re_path
from .views import  index, image_gallery, download_image, handle_undefined_url


urlpatterns = [
    path('',index, name='index'),
    path('gallery/', image_gallery, name='image_gallery'),
    path('image/<int:image_id>/download/', download_image, name='download_image'),
    # re_path(r'^(?P<undefined_path>.*)$', handle_undefined_url, name='handle_undefined_url'),
    
]
