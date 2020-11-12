import { Component, OnInit } from '@angular/core';
import { DeveloperService } from './developer.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  public developers:any = [];
  constructor(private developerService: DeveloperService) { }

  ngOnInit(): void {
      this.developerService.getDevelopers().subscribe((result)=>{
        this.developers = result;
        console.log(this.developers)
      });
  }

  deleteDeveloper(id) {
    this.developerService.DeleteDeveloper(id).subscribe((result)=>{
      console.warn("result", id);
      alert("🎉 资料成功删除。");
      window.location.reload();
    })
    console.warn(id);
   }

}
