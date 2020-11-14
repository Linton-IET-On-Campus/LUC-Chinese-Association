import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-committee',
  templateUrl: './add-committee.component.html',
  styleUrls: ['./add-committee.component.scss']
})
export class AddCommitteeComponent  {

  // alert:boolean = false;

  constructor(private http:HttpClient, private router: Router) { }

  onSubmit(data){
    this.http.post('https://luc-chinese-association.herokuapp.com/api/committees', data)
    .subscribe((result)=>{
      console.warn("result", result);
      this.router.navigate(['/dashboard']);
      alert("🎉 资料成功输入。");
    })
    console.warn(data);
  }

  // closeAlert(){
  //   this.alert=false;
  // }

}
