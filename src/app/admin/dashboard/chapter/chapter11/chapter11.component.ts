import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-chapter11',
  templateUrl: './chapter11.component.html',
  styleUrls: ['./chapter11.component.css']
})
export class Chapter11Component implements OnInit {
  resData;
  resObj;
  fetch;
  constructor(private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.resData=this.oper.fetchtopic11().subscribe((res)=>{
      this.resObj=res;
      this.fetch=this.resObj.fetch;
    })
      }
}
