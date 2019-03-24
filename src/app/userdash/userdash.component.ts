import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { OperationsService } from '../services/operations.service';
@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
resObj;
resData;
fetch;
cid;
  constructor(private router:Router,private oper:OperationsService,private ar:ActivatedRoute) { }

  ngOnInit() {
    // this.getData();
    // this.ar.params.subscribe(par=>{
    //   this.cid=par.id
    // })
    // console.log(this.cid)
    this.cid=localStorage.getItem('username')
    console.log(this.cid);
  }
// clickme(){
//   this.router.navigateByUrl("/userdash/userchapter");
//   console.log("clicked");
// }

// getData(){
//   this.resObj= this.oper.fetchtopic().subscribe((res)=>{
//     this.resData=res;

//   })
// }

logout(){
  localStorage.removeItem('username');
this.router.navigate(['/teacher']);
}
}
