import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { Router, RouterLink } from '@angular/router';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(private _projectService: ProjectService, private router: Router){
    this.loginForm = new FormGroup({
      email: new FormControl('', [RxwebValidators.email(),RxwebValidators.required() ]),
      password: new FormControl('', [RxwebValidators.required()]), 
    })
  }

  onLogin(){
    let payLoad: any = this.loginForm.getRawValue()
    this._projectService.login(payLoad).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Login Succesfully.")
        this.router.navigate(['/projects'])
      }else{
        alert("Login Not Succesfull.")
      }
    })
  }

}
