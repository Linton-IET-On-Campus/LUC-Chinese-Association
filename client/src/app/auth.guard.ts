import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService) {} 

  canActivate() : boolean {
    if (this.localStorageService.retrieve('user') && this.localStorageService.retrieve('user').valid){
      return true;
    }
    alert("请先登录！");
    return false
  }
  
}
