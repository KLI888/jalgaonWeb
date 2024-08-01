# Generated by Django 5.0.7 on 2024-07-29 14:22

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_bannerads_banner_add_category_four_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoplisting',
            name='is_valid',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='AdsListing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('contact_number', models.CharField(max_length=15)),
                ('contact_email', models.EmailField(max_length=254)),
                ('ad_type', models.CharField(choices=[('BA', 'Banner Ads'), ('CA', 'Carousel Ads')], default='BA', max_length=2)),
                ('ad_image', models.ImageField(upload_to='ads_images/')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
