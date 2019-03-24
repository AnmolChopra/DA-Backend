import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
oldForm:FormGroup
newForm:FormGroup
resData;
resObj;
cid;
  constructor(private oper:OperationsService,private fb:FormBuilder) { }

  ngOnInit() {
    this.old();
    // this.new();
   
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

  // new(){
  //   this.newForm=this.fb.group({
  //     newp:[''],
  //     cid:[this.cid]
  //   })
  // }

oldF(){
  let formData=this.oldForm.getRawValue();
  let seriliz = formData;
  this.resData=this.oper.findpass(seriliz).subscribe((res)=>{
    this.resObj=res;
    console.log(this.resObj);
  })
}

// newF(){
//   let formData=this.newForm.getRawValue();
//   let seriliz =formData;
//   this.resData = this.oper.chgpass(seriliz).subscribe((res)=>{
//     this.resObj=res;
//     console.log(this.resObj);
//   })
// }

}
