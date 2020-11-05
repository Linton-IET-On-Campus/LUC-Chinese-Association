import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iComments } from './comments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url: string = "/assets/data/comments.json";

  constructor(private http: HttpClient) { }

  getComments(): Observable<iComments[]>{
    return this.http.get<iComments[]>(this._url);
  }

}
