from django.db import models
from datetime import datetime


class Categories(models.TextChoices):
    FIFTIES = '1950-1959'
    SIXTIES = '1960-1969'
    SEVENTIES = '1970-1979'
    EIGHTIES = '1980-1989'
    NINETIES = '1990-1999'
    ZERO = '2000-2009'
    TEENS = '2010-2019'
    TWENTIES = '2020+'


class BlogPost(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=150)
    name_rus = models.CharField(max_length=50)
    name_tr = models.CharField(max_length=50)
    name_eng = models.CharField(max_length=50)
    slug = models.CharField(max_length=50, unique=True)
    category = models.CharField(
        max_length=20, choices=Categories.choices, default=Categories.TWENTIES)
    content_rus = models.TextField()
    content_transliter = models.TextField()
    content_eng = models.TextField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title
