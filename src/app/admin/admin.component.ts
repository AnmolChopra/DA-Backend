import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { OperationsService } from '../services/operations.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
adminForm:FormGroup;
resData;
resObj;
errMsg;
  constructor(private fb:FormBuilder,private op :OperationsService ,private router:Router) { }

  ngOnInit() {
    this.adminF();
  }

  adminF(){
    this.adminForm=this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })
  }

  adminLogin(){
var formData = this.adminForm.getRawValue();
var seriliz = formData;
this.resData = this.op.admlog(seriliz).subscribe((res)=>{
  this.resObj=res;
if(this.resObj.err ==0){
  localStorage.setItem('username',this.resObj.username);
  this.router.navigate(['/dashboard']);
}
else{
this.errMsg=this.resObj.msg;
}
  console.log(this.resObj);
})
  }

}
