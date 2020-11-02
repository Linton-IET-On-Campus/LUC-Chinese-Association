import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iCommittee } from './committee';
import { Observable } from 'rxjs';

@Injectable()
export class CommitteeService {

  private _url: string = "/assets/data/committees.json";

  constructor(private http: HttpClient) { }

  getCommittees(): Observable<iCommittee[]>{
    return this.http.get<iCommittee[]>(this._url);
  }


}
