import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private headers =  new HttpHeaders({
    'ngrok-skip-browser-warning': '69420',
  }) 

  constructor(private http: HttpClient) { }

  registerGovtEmp(obj:any){
    return this.http.get("API_END_POINT", obj)
  }
  
  registerCitizen(obj:any){
    return this.http.get("API_END_POINT", obj)
  }

  login(obj:any){
    return this.http.post("API_END_POINT", obj)
  }

  logout(obj:any){
    return this.http.post("API_END_POINT", obj)
  }

  getAllProjectDepartments(){
    return this.http.get("API_END_POINT");
  }

  createNewProject(obj:any){
    return this.http.post("API_END_POINT", obj);
  }

  getProjects(){
    //headers =  new HttpHeaders({'Content-Type': 'application/json'}) 
    //return this.http.get("https://ecf5-137-207-232-214.ngrok-free.app/project/active", {headers: this.headers});
    return this.http.get(`https://24a6-137-207-232-214.ngrok-free.app/project/active`)
  }

  getProjectDetailById(projectId:number){
    return this.http.get("API_END_POINT?projectId="+ projectId);
  }

  getFilteredProjects(obj:any){
    return this.http.get("API_END_POINT", obj);
  }

  submitOpinion(obj:any){
    //return this.http.post("API_END_POINT", obj)
  }



}
