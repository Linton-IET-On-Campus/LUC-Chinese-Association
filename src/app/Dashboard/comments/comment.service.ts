import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  _url: string = "https://luc-chinese-association.herokuapp.com/api/comments";

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get(this._url);
  }

  // Delete Todo
  DeleteComment(id) {
    return this.http.delete(`${this._url}/${id}`)
  }

  getCurrentData(id){
    return this.http.get(`${this._url}/${id}`);
  }

  updateComment(id, data){
    return this.http.patch(`${this._url}/${id}`, data);
  }

}
