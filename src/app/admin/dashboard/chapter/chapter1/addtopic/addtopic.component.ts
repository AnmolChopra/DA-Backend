import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
addForm:FormGroup;
addquiz:FormGroup;
dataFile;
resData;
resObj;
  constructor(private fb:FormBuilder ,private oper:OperationsService) {
    this.addForm=fb.group({
      'topicname':['',Validators.required],
      // 'question1':['',Validators.required],
      // 'ques1op1':['',Validators.required],
      // 'ques1op2':['',Validators.required],
      // 'ques1op3':['',Validators.required],
      // 'ques1op4':['',Validators.required],
      // 'correctop1':['',Validators.required],
      // 'question2':['',Validators.required],
      // 'ques2op1':['',Validators.required],
      // 'ques2op2':['',Validators.required],
      // 'ques2op3':['',Validators.required],
      // 'ques2op4':['',Validators.required],
      // 'correctop2':['',Validators.required],
      // 'question3':['',Validators.required],
      // 'ques3op1':['',Validators.required],
      // 'ques3op2':['',Validators.required],
      // 'ques3op3':['',Validators.required],
      // 'ques3op4':['',Validators.required],
      // 'correctop3':['',Validators.required],
      // 'question4':['',Validators.required],
      // 'ques4op1':['',Validators.required],
      // 'ques4op2':['',Validators.required],
      // 'ques4op3':['',Validators.required],
      // 'ques4op4':['',Validators.required],
      // 'correctop4':['',Validators.required],
      // 'question5':['',Validators.required],
      // 'ques5op1':['',Validators.required],
      // 'ques5op2':['',Validators.required],
      // 'ques5op3':['',Validators.required],
      // 'ques5op4':['',Validators.required],
      // 'correctop5':['',Validators.required],
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
//  //ques1
//  let question1= this.addForm.controls['question1'].value;
//  let ques1op1= this.addForm.controls['ques1op1'].value;
//  let ques1op2= this.addForm.controls['ques1op2'].value;
//  let ques1op3= this.addForm.controls['ques1op3'].value;
//  let ques1op4= this.addForm.controls['ques1op4'].value;
//  let correctop1= this.addForm.controls['correctop1'].value;
//  //ques2
//  let question2= this.addForm.controls['question2'].value;
//  let ques2op1= this.addForm.controls['ques2op1'].value;
//  let ques2op2= this.addForm.controls['ques2op2'].value;
//  let ques2op3= this.addForm.controls['ques2op3'].value;
//  let ques2op4= this.addForm.controls['ques2op4'].value;
//  let correctop2= this.addForm.controls['correctop2'].value;
//  //ques3
//  let question3= this.addForm.controls['question3'].value;
//  let ques3op1= this.addForm.controls['ques3op1'].value;
//  let ques3op2= this.addForm.controls['ques3op2'].value;
//  let ques3op3= this.addForm.controls['ques3op3'].value;
//  let ques3op4= this.addForm.controls['ques3op4'].value;
//  let correctop3= this.addForm.controls['correctop3'].value;
//  //ques4
//  let question4= this.addForm.controls['question4'].value;
//  let ques4op1= this.addForm.controls['ques4op1'].value;
//  let ques4op2= this.addForm.controls['ques4op2'].value;
//  let ques4op3= this.addForm.controls['ques4op3'].value;
//  let ques4op4= this.addForm.controls['ques4op4'].value;
//  let correctop4= this.addForm.controls['correctop4'].value;
//  //ques5
//  let question5= this.addForm.controls['question5'].value;
//  let ques5op1= this.addForm.controls['ques5op1'].value;
//  let ques5op2= this.addForm.controls['ques1op2'].value;
//  let ques5op3= this.addForm.controls['ques5op3'].value;
//  let ques5op4= this.addForm.controls['ques5op4'].value;
//  let correctop5= this.addForm.controls['correctop5'].value;
// //  let question1= this.addForm.controls['question1'].value;
// //  let ques1op1= this.addForm.controls['ques1op1'].value;
// //  let ques1op2= this.addForm.controls['ques1op2'].value;
// //  let ques1op3= this.addForm.controls['ques1op3'].value;
// //  let ques1op4= this.addForm.controls['ques1op4'].value;
// //  let correctop1= this.addForm.controls['correctop1'].value;
 let formData = new FormData();
 formData.append('topicname',topicname);
//  formData.append('question1',question1);
//  formData.append('ques1op1',ques1op1);
//  formData.append('ques1op2',ques1op2);
//  formData.append('ques1op3',ques1op3);
//  formData.append('ques1op4',ques1op4);
//  formData.append('correctop1',correctop1);
//  //ques2
//  formData.append('question2',question2);
//  formData.append('ques2op1',ques2op1);
//  formData.append('ques2op2',ques2op2);
//  formData.append('ques2op3',ques2op3);
//  formData.append('ques2op4',ques2op4);
//  formData.append('correctop2',correctop2);
//  //ques3
//  formData.append('question3',question3);
//  formData.append('ques3op1',ques3op1);
//  formData.append('ques3op2',ques3op2);
//  formData.append('ques3op3',ques3op3);
//  formData.append('ques3op4',ques3op4);
//  formData.append('correctop3',correctop3);
//  //ques4
//  formData.append('question4',question4);
//  formData.append('ques4op1',ques4op1);
//  formData.append('ques4op2',ques4op2);
//  formData.append('ques4op3',ques4op3);
//  formData.append('ques4op4',ques4op4);
//  formData.append('correctop4',correctop4);
// //ques5
// formData.append('question5',question5);
//  formData.append('ques5op1',ques5op1);
//  formData.append('ques5op2',ques5op2);
//  formData.append('ques5op3',ques5op3);
//  formData.append('ques5op4',ques5op4);
//  formData.append('correctop5',correctop5);


 formData.append('upload',this.dataFile);
this.oper.addtopic(formData).subscribe((res)=>{
this.resData=res;
console.log(this.resData);
})
}

}
