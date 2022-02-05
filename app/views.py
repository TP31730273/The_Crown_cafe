
import requests
from django.shortcuts import redirect, render
from .models import *
from django.core.mail import send_mail

import random

default_dictionary={}

# Create your views here.

def index(request):
    data(request)
    return render(request,"app/index.html",default_dictionary)
    
def menu(request):
    return render(request,"app/inner-page.html")

def data(request):
    
    bt=Book_a_table.objects.all()
    fb=feedback.objects.all()
    d=[]
    s=set()
    for j in bt:
        s.add(j.Phone)
    for i in s:
        for j in fb:
            if i == j.Phone:
                d.append([j.name,j.feedback])


    show_events(request)
    
    default_dictionary["all_data"]=d[0:5]
    
# table booking function
  
def book_table(request):
    name=request.POST['name']
    Email=request.POST['email']
    Phone=request.POST['phone']
    Date=request.POST['date']
    Time=request.POST['time']
    No_of_people=request.POST['people']
    Msg=request.POST['message']
    book=Book_a_table.objects.create(name=name,Email=Email,Phone=Phone,Date=Date,Time=Time,No_of_people=No_of_people,Msg=Msg)
    book.save()
    send_mail('Conformation of your booking',f"dear {name}, We have received your booking request for {No_of_people} successfully we will contact you shortly by call. Your requirements are shown below if you want to add any other requirement then call us on out support number.\n Details: {Msg} ",
    'sample31730273',
    [Email],
    fail_silently=False)

    

    url = "https://www.fast2sms.com/dev/bulkV2"  # using fast2sms
    message=f"dear {name}, We have received your booking request for {No_of_people} people successfully we will contact you shortly by call."
    payload = f"sender_id=FastSM&message={message}&route=v3&language=english&numbers={Phone}"

    headers = {
    'authorization':"EFMnd60W7lZVt3A4vOwkqYjxTgcR1Uu5NepyHsQfbPBXKrohSIqlunN0IB3XpYvefKchdJrPCES8j4D1",
    'Content-Type': "application/x-www-form-urlencoded",
    }
    response =requests.request("POST", url, data=payload, headers=headers)
    print(response.text)
    return redirect(index)

# feedbacks getting 

def get_feedback(request):
    name=request.POST['name']
    phone=request.POST['phone']
    feed=request.POST['message']
    eml=Book_a_table.objects.get(Phone=phone)
    print(eml.Email)
    try:

        feedbk=feedback.objects.create(name=name,Phone=phone,feedback=feed)
        feedbk.save()

        # send mail

        send_mail('Thank you for your Feedback',f"dear {name}, We have received your valuable feedback. Thank you.",
        'sample31730273',
        [eml.Email],
        fail_silently=False)

        #  send sms
        
        url = "https://www.fast2sms.com/dev/bulkV2"
        message=f"{name},We have received your valuable feedback. Thank you."
        payload = f"sender_id=FastSM&message={message}&route=v3&language=english&numbers={phone}"

        headers = {
        'authorization':"EFMnd60W7lZVt3A4vOwkqYjxTgcR1Uu5NepyHsQfbPBXKrohSIqlunN0IB3XpYvefKchdJrPCES8j4D1",
        'Content-Type': "application/x-www-form-urlencoded",
        }
        response =requests.request("POST", url, data=payload,   headers=headers)

    except:
        pass

    return redirect(index)

# Showing new events

def show_events(request):
    latest_event=Add_events.objects.all()
    
    default_dictionary["all_events"]=latest_event