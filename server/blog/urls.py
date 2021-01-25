from django.urls import path
from blog.views import BlogPostListView, BlogPostCategoryView, BlogPostDetailView

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('category', BlogPostCategoryView.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),
]
