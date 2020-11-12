import { Component, OnInit } from '@angular/core';
import { CommitteeService } from '../committee.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-committee',
  templateUrl: './edit-committee.component.html',
  styleUrls: ['./edit-committee.component.scss']
})
export class EditCommitteeComponent implements OnInit {
  alert:boolean = false;

  editCommittee = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    image: new FormControl(''),
    headline: new FormControl(''),
    comment: new FormControl(''),
    whatsapp: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private committee:CommitteeService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.committee.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editCommittee = new FormGroup({
        name: new FormControl(result['name']),
        position: new FormControl(result['position']),
        image: new FormControl(result['image']),
        headline: new FormControl(result['headline']),
        comment: new FormControl(result['comment']),
        whatsapp: new FormControl(result['whatsapp']),
        email: new FormControl(result['email'])
      })
    })
  }

  updateCommittee(){
    this.committee.updateCommittee(this.router.snapshot.params.id, this.editCommittee.value).subscribe((result)=>{
      console.log(result, "Data Updated Successfully")
      this.alert=true;
    })
  }

  closeAlert(){
    this.alert=false;
  }

}
