import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _url: string = "http://localhost:3000/contact";

  constructor(private http: HttpClient) { }

  getContact(){
    return this.http.get(this._url);
  }

}