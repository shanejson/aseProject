import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-govt-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './govt-register.component.html',
  styleUrl: './govt-register.component.css'
})
export class GovtRegisterComponent {

  govtEmpObj: any = {
    employeeId: 231,
    empFirstName: "",
    empLastName: "",
    empPassportNumber:"",
    empEmail: "",
    empContactNo: "",
    empDepartment: "",
    empPassword: ""
  }

  constructor(private _projectService: ProjectService){}

  registerGovtEmp(){
    console.log(this.govtEmpObj)
    alert("Registered Succesfully.")

    /* this._projectService.registerGovtEmp(this.govtEmpObj).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("User Created Succesfully.")
      }else{
        alert("User Not Created Succesfully.")
      }
    }) */
  }

}
