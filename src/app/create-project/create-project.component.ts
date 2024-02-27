import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent implements OnInit {

  newProjectObj: any = {
    projectName:"",
    projectDepartmentId: "",
    projectDepartmentName: "",
    projectAddress:"",
    projectCity: "",
    projectState: "",
    projectDuration: "",
    projectBudget: "",
    projectIsActive: true,
    projectCreatedDate: new Date().toISOString(),
    projectCreatedBy: ""
  }

  departmentList: any[]= []

  constructor(private _projectService: ProjectService){
    const loginDetails = localStorage.getItem('loggedIn');
    if(loginDetails != null){
      const data = JSON.parse(loginDetails)
      this.newProjectObj.projectCreatedBy = data.email
    }
  }

  ngOnInit(): void {
    this.getProjectDepartments();
  }

  getProjectDepartments(){
    /* this._projectService.getAllProjectDepartments().subscribe((res:any)=>{
      this.categoryList = res.data;
    }) */

    this.departmentList = [
      { departmentId: '101', departmentName: 'Engineering' },
      { departmentId: '102', departmentName: 'Human Resource' },
    ]
  }

  onCreateProject(){
    console.log(this.newProjectObj)

    this._projectService.createNewProject(this.newProjectObj).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Project created succesfully.")
      }else{
        alert("Project could not be created.")
      }
    })
  }

}
