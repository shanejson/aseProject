import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent implements OnInit {

  newProjectForm!: FormGroup

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

    this.newProjectForm = new FormGroup({
      name: new FormControl('', [RxwebValidators.required()]),
      department: new FormControl('', [RxwebValidators.required()]),
      city: new FormControl([], [RxwebValidators.required()]),
      duration:  new FormControl('', [RxwebValidators.required()]),
      budget:  new FormControl('', [RxwebValidators.required()]),
      IsActive:  new FormControl(true, [RxwebValidators.required()]),
      projectStartDate: new FormControl('', [RxwebValidators.required()]),
      description: new FormControl('', [RxwebValidators.required()]),
      createdDate: new FormControl(new Date().toISOString())
    })
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
    

    /* this._projectService.createNewProject(this.newProjectObj).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Project created succesfully.")
      }else{
        alert("Project could not be created.")
      }
    }) */
  }

}
