import { Component, OnInit } from '@angular/core';
import { CommitteeService } from './committee.service';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {

  public committees = [];

  constructor(private _committeeService: CommitteeService) { }

  ngOnInit(): void {
    this._committeeService.getCommittees()
      .subscribe(data => this.committees = data);
  }

}
