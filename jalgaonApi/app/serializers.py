from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from app.models import *
User = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['phone_number', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    
    def create(self, validated_data):
        user = User.objects.create_user(
            phone_number=validated_data['phone_number'],
            password=validated_data['password']
        )
        return user

class UserLoginSerializer(serializers.Serializer):
    phone_number = serializers.CharField()
    password = serializers.CharField(write_only=True)
    user = serializers.SerializerMethodField()

    def validate(self, data):
        user = authenticate(phone_number=data['phone_number'], password=data['password'])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        return {'user': user}

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'phone_number']

    def validate_phone_number(self, value):
        if len(value) > 13:
            raise serializers.ValidationError("Ensure this field has no more than 13 characters.")
        return value




class CategoryImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryImg
        fields = '__all__'

class MainCategorySerializer(serializers.ModelSerializer):
    category_img = CategoryImgSerializer()  # Nesting the CategoryImgSerializer

    class Meta:
        model = MainCategory
        fields = '__all__'

class SubCategorySerializer(serializers.ModelSerializer):
    main_category = serializers.SerializerMethodField()

    class Meta:
        model = SubCategory
        fields = ['id', 'sub_category', 'sub_category_img', 'main_category']  # Include only SubCategory fields

    def get_main_category(self, obj):
        return obj.main_category.main_category


class ShopListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopListing
        fields = '__all__'

    def update(self, instance, validated_data):
        # Only update fields that are provided
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

        # fields = [
        #     'user', 'main_category', 'sub_category', 'business_name',
        #     'business_rating', 'business_address','business_banner',
        #     'sub_domain_one', 'sub_domain_two', 'sub_domain_three',
        #     'sub_domain_four', 'sub_domain_five', 'sub_domain_six',
        #     'sub_domain_seven', 'business_origin', 'business_dob',
        #     'business_gst', 'business_description', 'business_no',
        #     'business_email', 'insta_link', 'facebook_link', 'website_link',
        #     'gmap_link'
        # ]        
        # fields = [
        #     'user', 'main_category', 'sub_category', 'business_name',
        #     'business_rating', 'business_address', 'business_banner',
        #     'sub_domain_one', 'sub_domain_two', 'sub_domain_three',
        #     'sub_domain_four', 'sub_domain_five', 'sub_domain_six',
        #     'sub_domain_seven', 'business_origin', 'business_dob',
        #     'business_gst', 'business_description', 'business_img_one',
        #     'business_img_two', 'business_img_three', 'business_no',
        #     'business_email', 'insta_link', 'facebook_link', 'website_link',
        #     'gmap_link'
        # ]

class HomeCrouselAdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeCrouselAds
        fields = '__all__'

class BannerAdsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannerAds
        fields = '__all__'

class FinanceDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinanceData
        fields = '__all__'



class AdsListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdsListing
        fields = '__all__'


class ArticleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleModel
        fields = '__all__'


class ActiveArticleSerializer(serializers.ModelSerializer):
    article = ArticleModelSerializer(read_only=True)

    class Meta:
        model = ActiveArticle
        fields = ['article']

class LikedShopsSerializer(serializers.ModelSerializer):
    shop_listing = ShopListingSerializer()

    class Meta:
        model = LikedShops
        fields = ['user', 'shop_listing']



class LikedShopsCreateSerializer(serializers.Serializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    shop_listing = serializers.PrimaryKeyRelatedField(queryset=ShopListing.objects.all())
    
    def create(self, validated_data):
        return LikedShops.objects.create(**validated_data)

class ShopReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopReview
        fields = ['user', 'shop_listing', 'rating_star', 'user_review', 'timestamp']


class ShopReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopReview
        fields = ['user', 'shop_listing', 'rating_star', 'user_review', 'timestamp']

    def create(self, validated_data):
        return ShopReview.objects.create(**validated_data)


class ShopReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, source='user.phone_number')  # Assuming you have UserSerializer

    class Meta:
        model = ShopReview
        fields = ['user', 'shop_listing', 'rating_star', 'user_review', 'timestamp']
