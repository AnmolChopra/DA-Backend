import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.css']
})
export class Chapter4Component implements OnInit {
  resData;
  resObj;
  fetch;
  constructor(private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.resData=this.oper.fetchtopic4().subscribe((res)=>{
      this.resObj=res;
      this.fetch=this.resObj.fetch;
    })
      }
}
