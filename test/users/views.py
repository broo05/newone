# users/views.py
import random
from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import Image, ImageCategory
from django.http import HttpResponse, HttpResponseNotFound




def index(request):
    return render(request, 'users/index.html')


def image_gallery(request):
    categories = ImageCategory.objects.all()

    category_id = request.GET.get('category')
    if category_id:
        images = Image.objects.filter(category__id = category_id)

    else:
        images = Image.objects.all()

    return render(request, 'users/gallery.html', {'categories': categories, 'images': images})


def image_detail(request, image_id):
    image = get_object_or_404(Image, id=image_id)
    return render(request, 'users/image_detail.html', {'image': image})

def download_image(request, image_id):
    image = get_object_or_404(Image, id=image_id)
    
    response = HttpResponse(image.image.file.read(), content_type='image/jpeg')
    response['Content-Disposition'] = f'attachment; filename="{image.title}.jpg"'
    return response



def handle_undefined_url(request, undefined_path):
    # return render(request, 'users/err.html', status=404)
    return HttpResponseNotFound('<h1>Page not found</h1>')