# Generated by Django 3.2.9 on 2021-11-19 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainFood', '0002_mainfood_src'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainfood',
            name='src',
            field=models.TextField(),
        ),
    ]