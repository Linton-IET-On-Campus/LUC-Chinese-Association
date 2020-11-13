import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Auth/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor(private localStorageService: LocalStorageService, private router:Router) { }
  constructor( private router:Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    // this.localStorageService.clear('user');
    this.router.navigate(['login']);

  }

}
