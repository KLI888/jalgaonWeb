# Generated by Django 5.0.7 on 2024-07-26 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_shoplisting_business_img_one_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BannerAds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('banner_add_home_one', models.ImageField(upload_to='static/assets/AdsImages')),
            ],
        ),
        migrations.CreateModel(
            name='FinanceData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock_title', models.CharField(max_length=50)),
                ('stock_price', models.CharField(max_length=50)),
                ('isUp', models.BooleanField()),
                ('stock_change', models.CharField(max_length=50)),
                ('stock_price_percentage', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='HomeCrouselAds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('crousel_add_img', models.ImageField(upload_to='static/assets/AdsImages')),
            ],
        ),
    ]
