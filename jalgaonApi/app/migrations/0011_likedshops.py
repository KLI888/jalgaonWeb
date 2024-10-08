# Generated by Django 5.0.7 on 2024-07-31 07:12

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_activearticle'),
    ]

    operations = [
        migrations.CreateModel(
            name='LikedShops',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shop_listing', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.shoplisting')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
