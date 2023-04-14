from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', c_list),
    path('companies/<int:company_id>/', c_detail),
    path('companies/<int:id>/vacancies/', c_vacancies),
    path('vacancies/', v_list),
    path('vacancies/<int:v_id>/', v_detail),
    path('vacancies/top_ten/', top10_v),
]