import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { OperationsService } from 'src/app/services/operations.service';
@Component({
  selector: 'app-addtopic10',
  templateUrl: './addtopic10.component.html',
  styleUrls: ['./addtopic10.component.css']
})
export class Addtopic10Component implements OnInit {
  addForm:FormGroup;
  addquiz:FormGroup;
  dataFile;
  resData;
  resObj;
  constructor(private fb:FormBuilder ,private oper:OperationsService) {
    this.addForm=fb.group({
      'topicname':['',Validators.required],
    })
   }

  ngOnInit() {
  }
  onSubmitEvent(event){
    if(event.target.files && event.target.files.length>0){
      this.dataFile=event.target.files[0];
    }
  }
  add(){
    let topicname= this.addForm.controls['topicname'].value;
    let formData = new FormData();
    formData.append('topicname',topicname);
    formData.append('upload',this.dataFile);
this.oper.addtopic10(formData).subscribe((res)=>{
this.resData=res;
console.log(this.resData);
})
}


}
