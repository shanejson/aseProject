import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitizenRegisterComponent } from './citizen-register/citizen-register.component';
import { GovtRegisterComponent } from './govt-register/govt-register.component';
import { HomeComponent } from './home/home.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { ProjectsComponent } from './projects/projects.component';
import { CitizenProjectsComponent } from './citizen-projects/citizen-projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LoginComponent,
    CitizenRegisterComponent,
    GovtRegisterComponent,
    HomeComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ProjectListingComponent,
    ProjectsComponent,
    CitizenProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aseProject';
}
