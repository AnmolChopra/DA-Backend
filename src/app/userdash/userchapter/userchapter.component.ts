import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-userchapter',
  templateUrl: './userchapter.component.html',
  styleUrls: ['./userchapter.component.css']
})
export class UserchapterComponent implements OnInit {
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
      console.log(this.fetch);
    })
      }

}
