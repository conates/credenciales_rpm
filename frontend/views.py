# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse
from django.conf import settings


# Create your views here.
def home(request):
	return render(request, 'home.html')