import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iDevelopers } from './credits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  private _url: string = "http://localhost:3000/developers";

  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<iDevelopers[]>{
    return this.http.get<iDevelopers[]>(this._url);
  }
}
