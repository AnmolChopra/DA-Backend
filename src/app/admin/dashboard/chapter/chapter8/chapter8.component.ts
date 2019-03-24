import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.component.html',
  styleUrls: ['./chapter8.component.css']
})
export class Chapter8Component implements OnInit {
  resData;
  resObj;
  fetch;
  constructor(private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.resData=this.oper.fetchtopic8().subscribe((res)=>{
      this.resObj=res;
      this.fetch=this.resObj.fetch;
    })
      }
}
