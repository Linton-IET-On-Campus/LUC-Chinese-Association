import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  alert:boolean = false;

  editComment = new FormGroup({
    name: new FormControl(''),
    club: new FormControl(''),
    comment: new FormControl('')
  
  })

  constructor(private comment:CommentService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.comment.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.editComment = new FormGroup({
        name: new FormControl(result['name']),
        club: new FormControl(result['club']),
        comment: new FormControl(result['comment'])
   
      })
     
    })
  }

  updateComment(){
    this.comment.updateComment(this.router.snapshot.params.id, this.editComment.value).subscribe((result)=>{
      console.log(result, "Data Updated Successfully")
      this.alert=true;
    })
  }

  closeAlert(){
    this.alert=false;
  }

}
