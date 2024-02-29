import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-citizen-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  templateUrl: './citizen-register.component.html',
  styleUrl: './citizen-register.component.css'
})
export class CitizenRegisterComponent implements OnInit {

  citizenObj: any = {
    firstName: "",
    lastName: "",
    dob: "",
    city: {},
    passportNumber:"",
    email: "",
    contactNo: "",
    password: ""
  }

  citizenRegForm!: FormGroup

  cities:any = cities
  selectedCity:any = []
  cityDropdownSettings:any = {
    singleSelection: true,
    idField: 'cityId',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };
  constructor(private _projectService: ProjectService){}

  ngOnInit(): void {
    console.log(cities);
    this.citizenRegForm = new FormGroup({
      firstName: new FormControl('', [RxwebValidators.required()]),
      lastName:  new FormControl('', [RxwebValidators.required()]),
      dob:  new FormControl('', [RxwebValidators.required()]),
      city: new FormControl({}, [RxwebValidators.required()]),
      passportNumber: new FormControl('', [RxwebValidators.required()]),
      contactNumber: new FormControl('', [RxwebValidators.required()]),
      email: new FormControl('', [RxwebValidators.email(),RxwebValidators.required() ]),
      password: new FormControl('', [RxwebValidators.required(), RxwebValidators.password({validation:{maxLength: 10,minLength: 5} })]), 
    })
  }

  registerCitizen(){
    //alert("Citizen Registered Succesfully.") 
 
    console.log(this.citizenRegForm.getRawValue())

    /* this._projectService.registerCitizen(this.citizenObj).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Citizen Created Succesfully.")
      }else{
        alert("Citizen Not Created Succesfully.")
      }
    }) */
  }

  cancelRegistration(){
    this.citizenRegForm.reset({})
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
