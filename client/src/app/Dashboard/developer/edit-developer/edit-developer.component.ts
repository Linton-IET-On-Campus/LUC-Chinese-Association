import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-developer',
  templateUrl: './edit-developer.component.html',
  styleUrls: ['./edit-developer.component.scss']
})
export class EditDeveloperComponent implements OnInit {

  alert:boolean = false;

  editDeveloper = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    image: new FormControl(''),
    github: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private developer:DeveloperService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.developer.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.editDeveloper = new FormGroup({
        name: new FormControl(result['name']),
        position: new FormControl(result['position']),
        image: new FormControl(result['image']),
        github: new FormControl(result['github']),
        email: new FormControl(result['email'])
      })
     
    })
  }

  updateDeveloper(){
    this.developer.updateDeveloper(this.router.snapshot.params.id, this.editDeveloper.value).subscribe((result)=>{
      console.log(result, "Data Updated Successfully")
      this.alert=true;
    })
  }

  closeAlert(){
    this.alert=false;
  }

}
