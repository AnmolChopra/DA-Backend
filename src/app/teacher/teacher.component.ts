import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { OperationsService } from '../services/operations.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherForm:FormGroup;
  resData;
  resObj;
  errMsg;
  cid;
  constructor(private fb:FormBuilder,private op :OperationsService ,private router:Router) { }

  ngOnInit() {
    this.techF();
  }
  techF(){
    this.teacherForm=this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })
  }

  techLogin(){
    var formData = this.teacherForm.getRawValue();
    var seriliz = formData;
    this.resData = this.op.techlog(seriliz).subscribe((res)=>{
      this.resObj=res;
    if(this.resObj.err ==0  && this.resObj.data.change_pass == true){
      localStorage.setItem('username',this.resObj.username);
      this.router.navigate(['/userdash']);
    }
    else if(this.resObj.data.change_pass == false && this.resObj.err ==0  ){
      localStorage.setItem('username',this.resObj.username);
      this.router.navigate(['./userdash/changepassword'])
    }
    else{
    this.errMsg=this.resObj.msg;
    }
      console.log(this.resObj.data._id);
    })
      }
}
