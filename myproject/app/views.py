from django.shortcuts import render
from django.http import HttpResponse
import hashlib

# Create your views here.
def main(request):
    if (request.method == "GET"):
        return render(request, "index.html")
    
def registration(request):
    if (request.method == "GET"):
        return render(request, "registration.html")

def login(request):
    if (request.method == "GET"):
        return render(request, "login.html")
    
def Website_Test(request):
    if (request.method == "GET"):
        return render(request, "website_testing.html")