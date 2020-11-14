import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _url: string = "https://luc-chinese-association.herokuapp.com/contact";

  constructor(private http: HttpClient) { }

  getContact(){
    return this.http.get(this._url);
  }

}
