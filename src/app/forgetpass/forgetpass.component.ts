import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../services/operations.service';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
myForm:FormGroup;
resData;
resObj;
  constructor(private oper:OperationsService,private fb:FormBuilder) { }

  ngOnInit() {
    this.myF();

  }

  myF(){
    this.myForm=this.fb.group({
      'email':['',Validators.required]
    })
  }

  forget(){
    var formData=this.myForm.getRawValue();
    var serliz = formData
    this.resData=this.oper.forget(serliz).subscribe((res)=>{
      this.resObj=res;
      
    })
  }

}
