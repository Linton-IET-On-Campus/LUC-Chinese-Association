import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  alert:boolean = false;
  email:string;
  password:string;

  // constructor(private router:Router, private auth:AuthService, private LocalStorageService: LocalStorageService) { }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
      if(this.email == "" && this.password == ""){
        this.router.navigate(["/dashboard"]);
      }
      else{
        alert("请输入正确用户名和密码！");
      }

      // this.auth.getAuthToken(this.email, this.password)
      // .then((res:any)=>{
      //   if(res.valid){
      //     this.LocalStorageService.store('user', res);
      //     this.router.navigate(["/dashboard"]);
      //   }else{
      //     alert("请输入正确用户名和密码！");
      //   }
      // })
    }
}
