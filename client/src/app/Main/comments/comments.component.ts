import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments:any = [];

  constructor(private _commentsService: CommentsService, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this._commentsService.getComments()
      .subscribe(data => this.comments = data);
  }

  onSubmit(data){
    this.http.post('http://localhost:3000/comments', data)
    .subscribe((result)=>{
      console.warn("result", result);
      alert("🎉 谢谢您的留言！");
      window.location.reload();
    })
    console.warn(data);
  }

}
