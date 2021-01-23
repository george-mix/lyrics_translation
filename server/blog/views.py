from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from .models import BlogPost
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import BlogPostSerializer


class BlogPostListView(APIView):
    queryset = BlogPost.objects.order_by('-date_created')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = permissions.AllowAny
