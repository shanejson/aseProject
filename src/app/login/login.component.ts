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
    password:""
  }

  userList:any

  constructor(private _projectService: ProjectService, private router: Router){
    this.userList = localStorage.getItem('users');
    console.log(this.userList)
    this.userList = JSON.parse(this.userList);
    console.log("USers: ", this.userList)
  }

  onLogin(){
    console.log("USers: ", this.userList)
    console.log(this.loginObj.email)
    let userCheck = this.userList.find((x:any)=>{
      x.email == this.loginObj.email
    })
    console.log(userCheck)
    // let obj:any = this.userList.find((x: { email: any; })=>x.email = this.loginObj.email)
    // console.log("OBJ: ", obj)


    /* if(this.loginObj.email == 'admin@team14.com' && this.loginObj.password == '12345678'){
      localStorage.setItem('loggedInUser', JSON.stringify({email: this.loginObj.email, role:'govt'}));
      alert('Login Succesful.');
      this.router.navigateByUrl('/projects');
    }
    else if(this.loginObj.email == 'citizen@team14.com' && this.loginObj.password == '12345678'){
      localStorage.setItem('loggedInUser', JSON.stringify({email: this.loginObj.email, role:'citizen'}));
      alert('Login Succesful.');
      this.router.navigateByUrl('/projects');
    }else{
      alert('Invalid Credentials.');
    } */
    
    /* this._projectService.registerCitizen(this.loginObj).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Login Succesfully.")
      }else{
        alert("Login Not Succesfull.")
      }
    }) */
  }

}
