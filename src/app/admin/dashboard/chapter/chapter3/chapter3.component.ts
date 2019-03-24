import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.component.html',
  styleUrls: ['./chapter3.component.css']
})
export class Chapter3Component implements OnInit {
  resData;
  resObj;
  fetch;
  constructor(private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.resData=this.oper.fetchtopic3().subscribe((res)=>{
      this.resObj=res;
      this.fetch=this.resObj.fetch;
    })
      }

}
