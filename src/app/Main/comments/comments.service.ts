import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iComments } from './comments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url: string = "https://luc-chinese-association.herokuapp.com/api/comments";

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get(this._url);
  }

}
