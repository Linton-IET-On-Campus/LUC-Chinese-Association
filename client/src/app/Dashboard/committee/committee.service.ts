import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { iCommittee } from './committee';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

   _url: string = "http://localhost:3000/committees";

  constructor(private http: HttpClient) { }

  getCommittees(): Observable<iCommittee[]>{
    return this.http.get<iCommittee[]>(this._url);
  }


  // Delete Todo
  DeleteCommittee(id) {
    return this.http.delete(`${this._url}/${id}`)
  }

  getCurrentData(id){
    return this.http.get(`${this._url}/${id}`);
  }

  updateCommittee(id, data){
    return this.http.get(`${this._url}/${id}`, data);
  }

}
