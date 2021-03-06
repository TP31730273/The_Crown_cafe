# Generated by Django 4.0.2 on 2022-02-05 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Add_events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Event_Title', models.CharField(max_length=100)),
                ('Event_Price', models.CharField(max_length=100)),
                ('Event_description', models.TextField()),
                ('Event_Image', models.FileField(upload_to='app')),
                ('Time', models.TimeField()),
                ('Date', models.DateField()),
            ],
            options={
                'db_table': 'Event-Table',
            },
        ),
        migrations.CreateModel(
            name='Book_a_table',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=100)),
                ('Phone', models.IntegerField()),
                ('Date', models.CharField(max_length=30)),
                ('Time', models.CharField(max_length=30)),
                ('No_of_people', models.CharField(max_length=30)),
                ('Msg', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'Book_a_table',
            },
        ),
        migrations.CreateModel(
            name='feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('Phone', models.IntegerField(unique=True)),
                ('feedback', models.CharField(max_length=300)),
            ],
            options={
                'db_table': 'feedback',
            },
        ),
    ]
