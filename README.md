# Lyrics Translation Website

<img src="https://github.com/george-mix/lyrics_translation/blob/master/example.gif?raw=true" alt="example.gif" >

## Overview

  | service    | technology |
  |:--------:|:-------:|
  | client | React |
  | server | Django |
  | db | PostgreSQL |

## Setup

If you want to run this project on your local machine:

### Client: 
```
$ npm install
$ npm start
```
### Database:
Make sure that you have PostgreSQL installed on your computer!
```
$ psql postgres
$ CREATE DATABASE lyrics_translation;
```

After creating database go to `server/lyrics_translation/settigs.py` and change the  `USER`, `PASSWORD` fields according to your credentials.

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'lyrics_translation',
        'USER': 'postgres',
        'PASSWORD': 'password123',
        'HOST': 'localhost'
    }
}
```


### Server:
Download dependencies:

```
$ pip install -r requirements.txt
```
Setting up virtual environment (in my case `venv`):
```
$ python3.7 -m venv venv
$ source venv/bin/activate
```
After we should create superuser:
```
$ python manage.py createsuperuser
```
And finally: 
```
$ python manage.py runserver
```
Our server will be running at `localhost/8000`.
To add posts go to `localhost:8000/admin` and enter your superuser credentials.
