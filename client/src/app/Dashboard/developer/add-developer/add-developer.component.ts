import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.scss']
})
export class AddDeveloperComponent{

  constructor(private http:HttpClient, private router: Router) { }

  onSubmit(data){
    this.http.post('http://localhost:3000/developers', data)
    .subscribe((result)=>{
      console.warn("result", result);
      this.router.navigate(['/dashboard/developers']);
      alert("🎉 资料成功输入。");
    })
    console.warn(data);
  }
}
