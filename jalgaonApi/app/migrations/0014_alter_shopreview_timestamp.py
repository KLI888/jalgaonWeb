# Generated by Django 5.0.7 on 2024-08-03 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_shopreview_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shopreview',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
