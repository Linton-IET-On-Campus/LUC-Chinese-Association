import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contacts:any = [];
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
      this.contactService.getContacts().subscribe((result)=>{
        this.contacts = result;
        console.log(this.contacts)
      });
  }

  deleteContact(id) {
    this.contactService.DeleteContact(id).subscribe((result)=>{
      console.warn("result", id);
      alert("🎉 资料成功删除。");
      window.location.reload();
    })
    console.warn(id);
   }

}
