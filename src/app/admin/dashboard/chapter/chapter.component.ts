import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { OperationsService } from 'src/app/services/operations.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
chForm:FormGroup;
resData;
resObj;
  constructor(private fb: FormBuilder,private oper :OperationsService,private router:Router) { }

  ngOnInit() {
    this.chF();
  }

  chF(){
    this.chForm = this.fb.group({
      'chapter':['',Validators.required]
    })
  }

  submitCh(){
    console.log("Submitted")
  }
}
