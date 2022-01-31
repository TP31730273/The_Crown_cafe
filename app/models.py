from django.db import models

# Create your models here.
class Book_a_table(models.Model):
    name=models.CharField(max_length=100)
    Email=models.CharField(max_length=100)
    Phone=models.IntegerField()
    Date=models.CharField(max_length=30)
    Time=models.CharField(max_length=30)
    No_of_people=models.CharField(max_length=30)
    Msg=models.CharField(max_length=30)
    
    class Meta:
        db_table = 'Book_a_table'

class feedback(models.Model):
    name=models.CharField(max_length=100)
    Phone=models.IntegerField(unique=True)
    feedback=models.CharField(max_length=300)

    class Meta:
        db_table = 'feedback'

