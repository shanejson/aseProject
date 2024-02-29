import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { faArrowRightArrowLeft, faArrowUpRightFromSquare, faCoffee, faComment, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projectList: any[] = [];
  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings:any = {};
  faMessage = faMessage
  faArrowUp = faArrowUpRightFromSquare

  fromDate:any = new Date().toISOString()

  projects:any;
  
  constructor(private _projectService: ProjectService, private router: Router) { 
    
  }

  ngOnInit(): void {

    this.loadProjects();

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  loadProjects() {
    /* this._projectService.getActiveProject().subscribe((res:any)=>{
      if(res.status == 'ok'){
        this.projectList = res.data;
      }
    }) */

    let projectListX:any = localStorage.getItem('projects')
    this.projectList = JSON.parse(projectListX)
    console.log("Project List",this.projectList)
  }

  openProject(id:number){
    this.router.navigate(['/project-detail', id])
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  searchFilters(){
    console.log("From: ", this.fromDate)
  }

}
