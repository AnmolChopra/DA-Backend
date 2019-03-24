import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';

@Component({
  selector: 'app-chgpass',
  templateUrl: './chgpass.component.html',
  styleUrls: ['./chgpass.component.css']
})
export class ChgpassComponent implements OnInit {
  oldForm:FormGroup
  newForm:FormGroup
  resData;
  resObj;
  cid;
  constructor(private oper:OperationsService,private fb:FormBuilder) { }

  ngOnInit() {
    this.old();
  }
  old(){
    this.cid=localStorage.getItem('username');
    console.log(this.cid)
this.oldForm=this.fb.group({
  old:[''],
  pass:[''],
 name:[this.cid],
 change_pass:[true]
})
  }

  oldF(){
    let formData=this.oldForm.getRawValue();
    let seriliz = formData;
    this.resData=this.oper.findpass(seriliz).subscribe((res)=>{
      this.resObj=res;
      console.log(this.resObj);
    })
  }

}
