# Generated by Django 5.0.7 on 2024-07-26 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_bannerads_financedata_homecrouselads'),
    ]

    operations = [
        migrations.AddField(
            model_name='bannerads',
            name='banner_add_category_four',
            field=models.ImageField(default='', upload_to='static/assets/AdsImages'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bannerads',
            name='banner_add_category_one',
            field=models.ImageField(default='', upload_to='static/assets/AdsImages'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bannerads',
            name='banner_add_category_three',
            field=models.ImageField(default='', upload_to='static/assets/AdsImages'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bannerads',
            name='banner_add_category_two',
            field=models.ImageField(default='', upload_to='static/assets/AdsImages'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bannerads',
            name='banner_add_home_two',
            field=models.ImageField(default='', upload_to='static/assets/AdsImages'),
            preserve_default=False,
        ),
    ]
