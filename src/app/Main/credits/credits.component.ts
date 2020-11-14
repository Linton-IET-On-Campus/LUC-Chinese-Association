import { Component, OnInit } from '@angular/core';
import { CreditsService } from './credits.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  public developers = [];

  constructor(private _creditsService: CreditsService) { }

  ngOnInit(): void {
    this._creditsService.getDevelopers()
      .subscribe(data => this.developers = data);
  }

}
