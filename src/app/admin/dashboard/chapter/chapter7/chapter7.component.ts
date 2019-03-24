import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-chapter7',
  templateUrl: './chapter7.component.html',
  styleUrls: ['./chapter7.component.css']
})
export class Chapter7Component implements OnInit {
  resData;
  resObj;
  fetch;
  constructor(private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.resData=this.oper.fetchtopic7().subscribe((res)=>{
      this.resObj=res;
      this.fetch=this.resObj.fetch;
    })
      }
}
