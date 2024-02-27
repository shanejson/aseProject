import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projectList: any[] = [];

  constructor(private _projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    /* this._projectService.getActiveProject().subscribe((res:any)=>{
      if(res.status == 'ok'){
        this.projectList = res.data;
      }
    }) */

    this.projectList = [
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
      },
      {
        projectId: "1df3fdg1",
        projectName: "Test2",
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

    ]
  }

  openProject(id:number){
    this.router.navigate(['/project-detail', id])
  }

}
