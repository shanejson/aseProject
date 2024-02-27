import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    email: "",
    password:"",
    role: "govtEmployee"
    //role: "citizen"
  }

  constructor(private _projectService: ProjectService, private router: Router){}

  onLogin(){
    alert('Login Succesful.');
    localStorage.setItem('loggedIn', JSON.stringify(this.loginObj));
    this.router.navigateByUrl('/projects');
    /* this._projectService.registerCitizen(this.loginObj).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Login Succesfully.")
      }else{
        alert("Login Not Succesfull.")
      }
    }) */
  }

}
