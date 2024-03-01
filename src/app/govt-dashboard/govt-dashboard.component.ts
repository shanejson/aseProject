import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule



interface Project {
  id: string;
  name: string;
}

@Component({
  selector: 'app-govt-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './govt-dashboard.component.html',
  styleUrls: ['./govt-dashboard.component.css'] // Corrected 'styleUrls'
})
export class GovtDashboardComponent implements OnInit {
  dropdownOptions: Project[] = [];

  selectedProjectId: String = "";

  ngOnInit() {
    // Retrieve data from local storage
    const projectsString = localStorage.getItem('projects');

    // if (projectsString !== null) {
    //   // Parse the data if it's not null
    //   const projects: Project[] = JSON.parse(projectsString);
      
    //   // Populate dropdownOptions array with id and name
    //   //this.dropdownOptions = projects.map((project: Project) => ({ id: project.id, name: project.name }));
    // }
  }

  showGraph() {
    console.log('Selected project ID:', this.selectedProjectId);
  }
}
