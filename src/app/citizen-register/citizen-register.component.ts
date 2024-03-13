import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';

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

  citizenRegForm!: FormGroup
  cities:any = cities
  
  constructor(private _projectService: ProjectService, private router: Router){}

  ngOnInit(): void {
    this.citizenRegForm = new FormGroup({
      firstName: new FormControl('', [RxwebValidators.required()]),
      lastName:  new FormControl('', [RxwebValidators.required()]),
      dob:  new FormControl('', [RxwebValidators.required()]),
      city: new FormControl(null, [RxwebValidators.required()]),
      passportNumber: new FormControl('', [RxwebValidators.required()]),
      contactNumber: new FormControl('', [RxwebValidators.required()]),
      email: new FormControl('', [RxwebValidators.email(),RxwebValidators.required() ]),
      password: new FormControl('', [RxwebValidators.required(), RxwebValidators.password({validation:{maxLength: 10,minLength: 5} })]), 
      role: new FormControl('citizen')
    })
  }

  registerCitizen(){
    let payload = this.citizenRegForm.getRawValue()

    this._projectService.registerCitizen(payload).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Citizen Created Succesfully.")
        this.router.navigate(['/login'])
      }else{
        alert("Citizen Not Created Succesfully.")
      }
    })
  }

  cancelRegistration(){
    this.citizenRegForm.reset({})
  }

}
