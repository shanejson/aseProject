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

  constructor(private activatedRouted: ActivatedRoute, private _projectService: ProjectService, private router: Router) {

    const loginDetails = localStorage.getItem('loggedIn');
    if(loginDetails == null){
      this.isLoggedIn = false;
    }else{
      this.userInfo = JSON.parse(loginDetails);
      this.isLoggedIn = true;
    }


    this.activatedRouted.params.subscribe((res:any)=>{
      this.activeProjectId = res.projectId
      this.getProjectDetail(this.activeProjectId)
    })

    
  }

  getProjectDetail(activeProjectId:number){
    /* this._projectService.getProjectDetailById(activeProjectId).subscribe((res:any)=>{
      this.projectObj = res.data
    }) */

    this.projectObj = 
      {
        projectId: "13sd31",
        projectName: "Test1",
        projectDepartmentId: "101",
        projectAddress: "Sandwich Street",
        projectCity: "Windsor",
        projectState: "Ontario",
        projectDuration: "27 months",
        projectBudget: "3000",
        projectIsActive: true,
        projectCreatedDate: '2024-02-27T04:13:52.014Z',
        projectCreatedBy: "sheldon@gmail.com",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    
  }

  cancelOpinion(){
    this.giveOpinion = false;
  }

}
