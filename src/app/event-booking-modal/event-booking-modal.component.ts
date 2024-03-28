import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EventService } from '../service/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-booking-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './event-booking-modal.component.html',
  styleUrl: './event-booking-modal.component.css'
})
export class EventBookingModalComponent implements OnInit {
  inputData:any;
  eventRegistrationForm!:FormGroup
  incompleteForm: boolean = false
  spinner: boolean = false
  event:any
  soldOut:boolean = false

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<EventBookingModalComponent>, private _EventService: EventService){}

  ngOnInit(): void {

    this.inputData = this.data
    this.event = this.data.eventDetails
    console.log("Data Received: ", this.inputData);

    this.eventRegistrationForm = new FormGroup({
      firstName: new FormControl('', [RxwebValidators.required()]),
      lastName: new FormControl('', [RxwebValidators.required()]),
      email: new FormControl('', [RxwebValidators.email(),RxwebValidators.required() ]),
      contactNumber:new FormControl('', [RxwebValidators.required()]),
      idCardNumber: new FormControl('', [RxwebValidators.required()]),
      date: new FormControl(new Date().toISOString())
    })
  }

  submit(){
    console.log(this.eventRegistrationForm)
    console.log(this.event)
    if(this.eventRegistrationForm.status == "INVALID"){
      this.incompleteForm = true
      //return ;
    }else{
      this.incompleteForm = false
      let payload = this.eventRegistrationForm.getRawValue()
      console.log(payload)
      this.spinner = true
      if(this.event.left == 0){
        this.soldOut = true
      }
    }
    



    //this.inputData.projectDetails.opinions.unshift(this.opinionForm.getRawValue())
    /* if(this.inputData.projectDetails.opinions.length !== undefined){
      this.inputData.projectDetails.opinions.unshift(this.opinionForm.getRawValue())
    }else{
      this.inputData.projectDetails.opinions.push(this.opinionForm.getRawValue())
    } */
    /* this._projectService.submitOpinion(this.opinionForm.getRawValue()).subscribe((res:any)=>{
      //this.projectObj = res.data
    }) */
    this.closepopup();
  }

  closepopup(){
    //this.ref.close(this.inputData.projectDetails);
  }

}

