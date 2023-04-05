from django.urls import path
from api.views import c_list, c_detail, p_list, p_detail

urlpatterns = [
    path('categories/', c_list),
    path('categories/<int:id>/', c_detail),
    path('products/', p_list),
    path('products/<int:id>/', p_detail)
]