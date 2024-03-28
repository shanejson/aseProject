import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventBookingModalComponent } from '../event-booking-modal/event-booking-modal.component';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  eventList:any[] = []
  eventDetails:any;

  otherEvents: any[] = []

  constructor(private activatedRouted: ActivatedRoute, public dialog: MatDialog){

    //Make API call to get Event List or keep it in the local storage
    this.eventList = [
      {
        "eventID": 1711142224080,
        "eventName": "Test Event 1",
        "eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "eventOrganizer":"Green Planet",
        "startDate": "2024-03-22T19:57:00.086Z",
        "startTime":"18:00",
        "endDate":  "2024-03-23T19:57:00.086Z",
        "endTime": "18:00",
        "price":"500",
        "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
        "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e",
        "totalCapacity":100,
        "booked": 50,
        "left": 0,
        "refunds":"No Refunds"
      },
      {
        "eventID": 171114224080,
        "eventName": "Test Event 2",
        "eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "eventOrganizer":"Green Planet",
        "eventCapacity": "100",
        "startDate": "2024-03-22T19:57:00.086Z",
        "startTime":"18:00",
        "endDate":  "2024-03-23T19:57:00.086Z",
        "endTime": "18:00",
        "price":"500",
        "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
        "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e",
        "totalCapacity":100,
        "booked": 50,
        "left": 50,
        "refunds":"No Refunds"
      },
      {
        "eventID": 171165224080,
        "eventName": "Test Event 3",
        "eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "eventOrganizer":"Green Planet",
        "eventCapacity": "100",
        "startDate": "2024-03-22T19:57:00.086Z",
        "startTime":"18:00",
        "endDate":  "2024-03-23T19:57:00.086Z",
        "endTime": "18:00",
        "price":"500",
        "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
        "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e",
        "totalCapacity":100,
        "booked": 50,
        "left": 50,
        "refunds":"No Refunds"
      },
      {
        "eventID": 171165224080,
        "eventName": "Test Event 3",
        "eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "eventOrganizer":"Green Planet",
        "eventCapacity": "100",
        "startDate": "2024-03-22T19:57:00.086Z",
        "startTime":"18:00",
        "endDate":  "2024-03-23T19:57:00.086Z",
        "endTime": "18:00",
        "price":"500",
        "location":"7155 Enterprise Way, Windsor, ON N8T 3N6",
        "imageUrl":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F703135259%2F281337702196%2F1%2Foriginal.20200827-125756?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C1%2C716%2C358&s=48dcd5b0bb3a27fb649d15586f01a85e",
        "totalCapacity":100,
        "booked": 50,
        "left": 50,
        "refunds":"No Refunds"
      }
    ]

    this.activatedRouted.params.subscribe((res:any)=>{
      console.log("EventID: ", res)
      this.getEventDetail(res.eventId)
    })

  }

  getEventDetail(eventID:any){
    this.eventDetails = this.eventList.find((x:any)=>x.eventID == eventID)
    console.log("Event Detail to use: ", this.eventDetails)
    this.otherEvents = this.eventList.filter((x:any)=> x.eventID !== this.eventDetails.eventID)
  }


  registerForEvent(eventDetails:any){
    var _popup = this.dialog.open(EventBookingModalComponent, {
      width: '60%',
      data: {
        title: "Register",
        eventDetails: eventDetails
      }
    })
  }
}
