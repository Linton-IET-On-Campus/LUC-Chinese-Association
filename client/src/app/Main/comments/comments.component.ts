import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments = [];

  constructor(private _commentsService: CommentsService) { }

  ngOnInit(): void {
    this._commentsService.getComments()
      .subscribe(data => this.comments = data);
  }

}
