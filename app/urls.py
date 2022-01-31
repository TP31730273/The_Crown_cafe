from django.urls import path,include
from app.views import *

urlpatterns = [
    path('',index,name="index"),
    path('menu/',menu,name="menu"),
    path('book_table/',book_table,name="book_table"),
    path('get_feedback/',get_feedback,name="get_feedback"),
]

