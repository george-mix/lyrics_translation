# Generated by Django 3.1.5 on 2021-02-15 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogpost',
            old_name='excerpt',
            new_name='author',
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(choices=[('1950-1959', 'Fifties'), ('1960-1969', 'Sixties'), ('1970-1979', 'Seventies'), ('1980-1989', 'Eighties'), ('1990-1999', 'Nineties'), ('2000-2009', 'Zero'), ('2010-2019', 'Teens'), ('2020+', 'Twenties')], default='2020+', max_length=20),
        ),
        migrations.AlterField(
            model_name='blogpost',
            name='title',
            field=models.CharField(max_length=150),
        ),
    ]