import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service'

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule
} from '@angular/material/dialog';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-opinion-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  templateUrl: './opinion-modal.component.html',
  styleUrl: './opinion-modal.component.css'
})
export class OpinionModalComponent implements OnInit{

  opinionForm!:FormGroup


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref:MatDialogRef<OpinionModalComponent>, private _projectService: ProjectService){}

  ngOnInit(): void {
    this.inputData = this.data
    console.log(this.inputData)

    this.opinionForm = new FormGroup({
      'opinion': new FormControl('excellent', [RxwebValidators.required()]),
      'message': new FormControl(''),
      'date': new FormControl(new Date().toISOString())
    })
  }

  inputData:any;

  submitOpinion(){
    console.log("Opinion Form: ", this.opinionForm.getRawValue())
    this.inputData.projectDetails.opinions.unshift(this.opinionForm.getRawValue())
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
    this.ref.close(this.inputData.projectDetails);
  }

}
