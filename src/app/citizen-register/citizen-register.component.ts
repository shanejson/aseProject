import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-citizen-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './citizen-register.component.html',
  styleUrl: './citizen-register.component.css'
})
export class CitizenRegisterComponent {

  citizenObj: any = {
    citizenId: 231,
    citizenFirstName: "",
    citizenLastName: "",
    citizenPassportNumber:"",
    citizenEmail: "",
    citizenContactNo: "",
    citizenPassword: ""
  }

  registerCitizen(){
    console.log(this.citizenObj)
    alert("Registered Succesfully.")

    /* this._projectService.registerCitizen(this.citizenObj).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Citizen Created Succesfully.")
      }else{
        alert("Citizen Not Created Succesfully.")
      }
    }) */
  }

}
