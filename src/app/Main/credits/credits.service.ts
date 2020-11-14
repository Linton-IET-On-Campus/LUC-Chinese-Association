import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iDevelopers } from './credits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  private _url: string = "https://luc-chinese-association.herokuapp.com/developers";

  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<iDevelopers[]>{
    return this.http.get<iDevelopers[]>(this._url);
  }
}
