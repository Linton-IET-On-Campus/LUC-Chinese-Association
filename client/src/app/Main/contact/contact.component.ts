  
import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public comments:any = [];

  constructor(private contactService: ContactService, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.contactService.getContact()
      .subscribe(data => this.comments = data);
  }

  onSubmit(data){
    this.http.post('http://localhost:3000/contact', data)
    .subscribe((result)=>{
      console.warn("result", result);
      alert("🎉 信息已发，谢谢您的信息！");
      window.location.reload();
    })
    console.warn(data);
  }
}
