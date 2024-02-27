import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

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

  getActiveProject(){
    return this.http.get("API_END_POINT");
  }

  getProjectDetailById(projectId:number){
    return this.http.get("API_END_POINT?projectId="+ projectId);
  }

  submitOpinion(obj:any){
    return this.http.post("API_END_POINT", obj)
  }



}
