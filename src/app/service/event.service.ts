import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  allEvents(obj:any){
    return this.http.get("API_END_POINT", obj);
  }

  createEvent(obj:any){
    return this.http.post("API_END_POINT", obj);
  }


}
