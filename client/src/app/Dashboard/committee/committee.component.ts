import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { CommitteeService } from './committee.service';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {


  public committees:any = [];
  constructor(private _committeeService: CommitteeService) { }

  ngOnInit(): void {
      this._committeeService.getCommittees().subscribe((result)=>{
        this.committees = result;
        console.log(this.committees)
      });
  }

  deleteCommittee(id) {
    this._committeeService.DeleteCommittee(id).subscribe((result)=>{
      console.warn("result", id);
      alert("🎉 资料成功删除。");
      window.location.reload();
    })
    console.warn(id);
   }

  }
