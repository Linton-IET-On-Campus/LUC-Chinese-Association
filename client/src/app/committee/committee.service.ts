import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iCommittee } from './committee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  private _url: string = "/assets/data/committee.json";

  constructor(private http: HttpClient) { }

  getCommittees(): Observable<iCommittee[]>{
    return this.http.get<iCommittee[]>(this._url);
  }


}
