import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from '../service/project.service';
import { RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { cities } from '../constants/constants';
import { Router } from '@angular/router';

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

  cities:any = cities

  newProjectForm!: FormGroup
  projectList:any

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

  departmentList: any[] = [{name:'Transportation'}, {name:'Education'}, {name:'Crime'}, {name:'Environment'} ]

  constructor(private _projectService: ProjectService, private router: Router){
    
  }

  ngOnInit(): void {
    //this.getProjectDepartments();

    let projectListX:any = localStorage.getItem('projects')
    this.projectList = JSON.parse(projectListX)

    this.newProjectForm = new FormGroup({
      name: new FormControl('', [RxwebValidators.required()]),
      department: new FormControl(null, [RxwebValidators.required()]),
      city: new FormControl(null, [RxwebValidators.required()]),
      duration:  new FormControl('', [RxwebValidators.required()]),
      budget:  new FormControl('', [RxwebValidators.required()]),
      projectStartDate: new FormControl('', [RxwebValidators.required()]),
      description: new FormControl('', [RxwebValidators.required()]),
      createdDate: new FormControl(new Date().toISOString()),
      projectId: new FormControl(Date.now()),
      opinions: new FormControl([]),
      id: new FormControl(Date.now().toString())
    })
  }


  onCreateProject(){
    let payLoad: any = this.newProjectForm.getRawValue()

    //this.projectList = JSON.parse(projectListX)
    this.projectList.unshift(payLoad)
    localStorage.setItem('projects', JSON.stringify(this.projectList));
    alert("Project added succesfully.")
    this.router.navigate(['/projects'])
    /* this._projectService.createNewProject(payLoad).subscribe((res:any)=>{
      if(res.status == 'ok'){
        alert("Project created succesfully.")
        this.router.navigate(['/projects'])
      }else{
        alert("Project could not be created.")
      }
    }) */
  }

  reset(){
    this.newProjectForm.reset({})
  }

}
