from django.contrib import admin

from .models import Book_a_table, feedback


@admin.register(Book_a_table)
class Book_a_tableAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'Email',
        'Phone',
        'Date',
        'Time',
        'No_of_people',
        'Msg',
    )
    search_fields = ('name',)


@admin.register(feedback)
class feedbackAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'Phone', 'feedback')
    search_fields = ('name',)