from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from app.views import *
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    path('user/', UserView.as_view(), name='user'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('csrf-token/', get_csrf_token),



    path('categorys/', CategoryView.as_view(), name='categorys'),
    path('subCategorys/', SubCategoryView.as_view(), name='subCategorys'),

    path('shopListing/', ShopListingCreateView.as_view(), name='shopListing'),
    path('adsListing/', AdsListingCreateAPIView.as_view(), name='adsListing'),
    path('updateShop/', UpdateShopListingView.as_view(), name='adsListing'),



    path('tokenKey/', ObtainTokenKeyView.as_view(), name='api_token_auth'),

    path('finance-data/', FinanceTickleView.as_view(), name='finance_tickle'),
    path('crousel-ads/', HomeCrouselAdsView.as_view(), name='crousel_ads'),
    path('banner-ads/', BannerAdsView.as_view(), name='banner-ads'),

    path('filtered-business/', get_products_by_category, name='filtered_business'),
    path('business-view/', ProductDetailView.as_view(), name='business_view'),
    path('articleGet/', get_article_by_id, name='article_get'),

    path('articles/', ArticleListView.as_view(), name='article-list'),
    path('active-articles/', ActiveArticleListView.as_view(), name='active-article-list'),


    path('likedShops/', LikedShopsView.as_view(), name='liked_shops'),
    path('listedShops/', UserListedShops.as_view(), name='listed_shops'),
    path('editShopsData/', UserListedShopsEdit.as_view(), name='listed_shops'),
    path('shop_reviews/', submit_review, name='submit_review'),
    path('get_shop_reviews/', get_shop_reviews, name='get_shop_reviews'),






    # path('shopListing/', shop_listing, name='shopListing'),
]
