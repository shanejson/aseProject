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

}
