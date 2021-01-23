from django.db import models
from datetime import datetime


class Categories(models.TextChoices):
    FIFTIES = '1950'
    SIXTIES = '1960'
    SEVENTIES = '1970'
    EIGHTIES = '1980'
    NINETIES = '1990'
    ZERO = '2000'
    TEENS = '2010'
    TWENTIES = '2020'


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    name_rus = models.CharField(max_length=50)
    name_eng = models.CharField(max_length=50)
    name_tr = models.CharField(max_length=50)
    slug = models.CharField(max_length=50, unique=True)
    category = models.CharField(
        max_length=20, choices=Categories.choices, default=Categories.TWENTIES)
    excerpt = models.CharField(max_length=150)
    content_rus = models.TextField()
    content_eng = models.TextField()
    content_transliter = models.TextField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title
