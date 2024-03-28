import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EventBookingModalComponent } from '../event-booking-modal/event-booking-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {

  loggedUserData:any; //userRole
  eventList:any[] = []
 

  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
    const localData = localStorage.getItem("eventUser");
    if(localData != null){
      this.loggedUserData = JSON.parse(localData);
      console.log("Role: ", this.loggedUserData)
     
    }

    //Get All Events
    this.loadEvents();
  }

  loadEvents(){
    /* this._EventService.allEvents().subscribe((res:any)=>{
        if(res.status == 'ok'){
          
        }else{
        }
      }) */

      this.eventList = [
        {
          "eventID": 1711142224080,
          "eventName": "Test Event 1",
          "startDate": "2024-03-22T19:57:00.086Z",
          "startTime":"18:00",
          "endDate":  "2024-03-23T19:57:00.086Z",
          "endTime": "18:00",
          "price":"500",
          "location":"Windsor",
          "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e",
          "organizerName":"Green Event Planners"
        },
        {
          "eventID": 1711143224080,
          "eventName": "Test Event 2",
          "startDate": "2024-03-22T19:57:00.086Z",
          "startTime":"18:00",
          "endDate":  "2024-03-23T19:57:00.086Z",
          "endTime": "18:00",
          "price":"500",
          "location":"Windsor",
          "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F696366559%2F532022669793%2F1%2Foriginal.20240213-184558?w=400&auto=format%2Ccompress&q=75&sharp=10&s=c2d2e92de7af1973adb67e171ee7adf8",
          "organizerName":"Green Event Planners"
        },
      ]

  }

  getTicket(event:any){
    console.log("Event Details: ", event)
    var _popup = this.dialog.open(EventBookingModalComponent, {
      width: '60%',
      data: {
        title: "Register",
        eventDetails: event
      }
    })
  }
}
