import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  _url: string = "https://luc-chinese-association.herokuapp.com/api/developers";

  constructor(private http: HttpClient) { }

  getDevelopers(){
    return this.http.get(this._url);
  }

  // Delete Todo
  DeleteDeveloper(id) {
    return this.http.delete(`${this._url}/${id}`)
  }

  getCurrentData(id){
    return this.http.get(`${this._url}/${id}`);
  }

  updateDeveloper(id, data){
    return this.http.patch(`${this._url}/${id}`, data);
  }
}
