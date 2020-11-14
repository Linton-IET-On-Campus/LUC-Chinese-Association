import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments:any = [];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
      this.commentService.getComments().subscribe((result)=>{
        this.comments = result;
        console.log(this.comments)
      });
  }

  deleteComment(id) {
    this.commentService.DeleteComment(id).subscribe((result)=>{
      console.warn("result", id);
      alert("🎉 资料成功删除。");
      window.location.reload();
    })
    console.warn(id);
   }

}
