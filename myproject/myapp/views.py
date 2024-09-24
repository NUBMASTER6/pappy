# myapp/views.py

from django.shortcuts import render

def index(request):
    return render(request, 'index.html')  # Renders the 'index.html' located in the 'static' folder
