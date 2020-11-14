import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _url: string = "https://luc-chinese-association.herokuapp.com/api/contact";

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get(this._url);
  }

  // Delete Todo
  DeleteContact(id) {
    return this.http.delete(`${this._url}/${id}`)
  }

  getCurrentData(id){
    return this.http.get(`${this._url}/${id}`);
  }

  updateContact(id, data){
    return this.http.patch(`${this._url}/${id}`, data);
  }

}
