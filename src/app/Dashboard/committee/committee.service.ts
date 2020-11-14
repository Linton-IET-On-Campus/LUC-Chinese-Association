import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

   _url: string = "https://luc-chinese-association.herokuapp.com/committees";

  constructor(private http: HttpClient) { }

  getCommittees(){
    return this.http.get(this._url);
  }

  // Delete Todo
  DeleteCommittee(id) {
    return this.http.delete(`${this._url}/${id}`)
  }

  getCurrentData(id){
    return this.http.get(`${this._url}/${id}`);
  }

  updateCommittee(id, data){
    return this.http.patch(`${this._url}/${id}`, data);
  }

}
