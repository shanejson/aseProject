import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../service/event.service';
import { NumericValueType, RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit {

  createEventForm!: FormGroup
  cities:any = cities
  loggedInUserID: any
  loggedInDetails: any = {}
  loggedIn: boolean = false
  incompleteForm: boolean = false

  constructor(private _EventService: EventService, private _projectService: ProjectService){ }

  ngOnInit(): void {

    //Login Logout Check
    let loggedIn = localStorage.getItem('loggedInUser')
    if (loggedIn !== null) {
      this.loggedInDetails = JSON.parse(loggedIn);
      this.loggedInUserID = Number(this.loggedInDetails.id)
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }
    
    this.createEventForm = new FormGroup({
      eventName:  new FormControl('', [RxwebValidators.required()]),
      eventStart: new FormControl('', [RxwebValidators.required()]),
      eventEnd:  new FormControl('', [RxwebValidators.required()]),
      location: new FormControl('', [RxwebValidators.required()]),
      description: new FormControl(null, [RxwebValidators.required()]),
      capacity: new FormControl('', [RxwebValidators.required()]),
      organizer: new FormControl('', [RxwebValidators.required()]),
      createdBy: new FormControl(this.loggedInDetails.email),
      price: new FormControl(''),
    })


  }

  submit(){
    console.log(this.createEventForm)
    if(this.createEventForm.status == "INVALID"){
      this.incompleteForm = true
      //return ;
    }else{
      this.incompleteForm = false
      let payLoad: any = this.createEventForm.getRawValue();
      console.log(payLoad)
      alert("Event Created Succesfully.")
    }
  }

  reset(){
    this.createEventForm.reset({})
  }
}
