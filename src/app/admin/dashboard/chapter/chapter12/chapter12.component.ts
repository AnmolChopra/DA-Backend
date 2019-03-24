import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-chapter12',
  templateUrl: './chapter12.component.html',
  styleUrls: ['./chapter12.component.css']
})
export class Chapter12Component implements OnInit {
  resData;
  resObj;
  fetch;
  constructor(private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.resData=this.oper.fetchtopic12().subscribe((res)=>{
      this.resObj=res;
      this.fetch=this.resObj.fetch;
    })
      }
}
