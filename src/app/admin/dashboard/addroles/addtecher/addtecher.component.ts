import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-addtecher',
  templateUrl: './addtecher.component.html',
  styleUrls: ['./addtecher.component.css']
})
export class AddtecherComponent implements OnInit {
addtech:FormGroup;
resData;
resObj;
  constructor(private fb:FormBuilder,private oper:OperationsService) { }

  ngOnInit() {
    this.addF();
  }
addF(){
this.addtech= this.fb.group({
'username':['',Validators.required],
'email':['',Validators.required],
'password':['',Validators.required]
})
}
addt(){
  var formData = this.addtech.getRawValue();
  var seriliz = formData;
  this.resData= this.oper.addteach(seriliz).subscribe((res)=>{
    this.resObj=res;
    console.log(this.resObj)
  })
}
}
