import { Component } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

  activeProjectId: number = 0;
  projectObj:any
  userInfo:any
  isLoggedIn:boolean = false
  giveOpinion:boolean = false;

  projectList:any
  projectDetails:any

  constructor(private activatedRouted: ActivatedRoute, private _projectService: ProjectService, private router: Router) {

    /* const loginDetails = localStorage.getItem('loggedIn');
    if(loginDetails == null){
      this.isLoggedIn = false;
    }else{
      this.userInfo = JSON.parse(loginDetails);
      this.isLoggedIn = true;
    } */
    let projectListX:any = localStorage.getItem('projects')
    this.projectList = JSON.parse(projectListX)
    console.log("Project List",this.projectList)


    this.activatedRouted.params.subscribe((res:any)=>{
      this.activeProjectId = res.projectId
      this.getProjectDetail(this.activeProjectId)
    })

    
  }

  getProjectDetail(activeProjectId:number){
    /* this._projectService.getProjectDetailById(activeProjectId).subscribe((res:any)=>{
      this.projectObj = res.data
    }) */

    this.projectDetails = this.projectList.find((x:any)=>x.id == activeProjectId)
    console.log("X-->",this.projectDetails)

    
    
  }

  cancelOpinion(){
    this.giveOpinion = false;
  }

}
