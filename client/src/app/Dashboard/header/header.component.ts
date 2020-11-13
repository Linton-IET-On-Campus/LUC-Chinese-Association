import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor(private localStorageService: LocalStorageService, private router:Router) { }
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    // this.localStorageService.clear('user');
    this.router.navigate(['login']);

  }

}
