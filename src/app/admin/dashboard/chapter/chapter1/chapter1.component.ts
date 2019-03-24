import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component implements OnInit {
resData;
resObj;
fetch;
  constructor(private oper:OperationsService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
this.resData=this.oper.fetchtopic().subscribe((res)=>{
  this.resObj=res;
  this.fetch=this.resObj.fetch;
  console.log(this.fetch)
})
  }

}
