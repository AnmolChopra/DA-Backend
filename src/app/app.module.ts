import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ChapterComponent } from './admin/dashboard/chapter/chapter.component';
// import { AddchapterComponent } from './admin/dashboard/chapter/addchapter/addchapter.component';
import { AddrolesComponent } from './admin/dashboard/addroles/addroles.component';
import { TopicComponent } from './admin/dashboard/topic/topic.component';
import { Chapter1Component } from './admin/dashboard/chapter/chapter1/chapter1.component';
import { AddtopicComponent } from './admin/dashboard/chapter/chapter1/addtopic/addtopic.component';
import { AddquizComponent } from './admin/dashboard/chapter/chapter1/addtopic/addquiz/addquiz.component';
import { AddtecherComponent } from './admin/dashboard/addroles/addtecher/addtecher.component';
import { UserdashComponent } from './userdash/userdash.component';
import { UserchapterComponent } from './userdash/userchapter/userchapter.component';
import { Chapter2Component } from './admin/dashboard/chapter/chapter2/chapter2.component';
import { Addtopic2Component } from './admin/dashboard/chapter/chapter2/addtopic2/addtopic2.component';
import { Addquiz2Component } from './admin/dashboard/chapter/chapter2/addtopic2/addquiz2/addquiz2.component';
import { TeacherComponent } from './teacher/teacher.component';
import { Chapter3Component } from './admin/dashboard/chapter/chapter3/chapter3.component';
import { Chapter4Component } from './admin/dashboard/chapter/chapter4/chapter4.component';
import { Chapter5Component } from './admin/dashboard/chapter/chapter5/chapter5.component';
import { Chapter6Component } from './admin/dashboard/chapter/chapter6/chapter6.component';
import { Chapter7Component } from './admin/dashboard/chapter/chapter7/chapter7.component';
import { Chapter8Component } from './admin/dashboard/chapter/chapter8/chapter8.component';
import { Chapter9Component } from './admin/dashboard/chapter/chapter9/chapter9.component';
import { Chapter10Component } from './admin/dashboard/chapter/chapter10/chapter10.component';
import { Chapter11Component } from './admin/dashboard/chapter/chapter11/chapter11.component';
import { Chapter12Component } from './admin/dashboard/chapter/chapter12/chapter12.component';
import { Addtopic3Component } from './admin/dashboard/chapter/chapter3/addtopic3/addtopic3.component';
import { Addquiz3Component } from './admin/dashboard/chapter/chapter3/addtopic3/addquiz3/addquiz3.component';
import { Addtopic4Component } from './admin/dashboard/chapter/chapter4/addtopic4/addtopic4.component';
import { Addquiz4Component } from './admin/dashboard/chapter/chapter4/addtopic4/addquiz4/addquiz4.component';
import { Addtopic5Component } from './admin/dashboard/chapter/chapter5/addtopic5/addtopic5.component';
import { Addquiz5Component } from './admin/dashboard/chapter/chapter5/addtopic5/addquiz5/addquiz5.component';
import { Addtopic6Component } from './admin/dashboard/chapter/chapter6/addtopic6/addtopic6.component';
import { Addquiz6Component } from './admin/dashboard/chapter/chapter6/addtopic6/addquiz6/addquiz6.component';
import { Addtopic7Component } from './admin/dashboard/chapter/chapter7/addtopic7/addtopic7.component';
import { Addquiz7Component } from './admin/dashboard/chapter/chapter7/addtopic7/addquiz7/addquiz7.component';
import { Addtopic8Component } from './admin/dashboard/chapter/chapter8/addtopic8/addtopic8.component';
import { Addquiz8Component } from './admin/dashboard/chapter/chapter8/addtopic8/addquiz8/addquiz8.component';
import { Addtopic9Component } from './admin/dashboard/chapter/chapter9/addtopic9/addtopic9.component';
import { Addquiz9Component } from './admin/dashboard/chapter/chapter9/addtopic9/addquiz9/addquiz9.component';
import { Addtopic10Component } from './admin/dashboard/chapter/chapter10/addtopic10/addtopic10.component';
import { Addquiz10Component } from './admin/dashboard/chapter/chapter10/addtopic10/addquiz10/addquiz10.component';
import { Addtopic11Component } from './admin/dashboard/chapter/chapter11/addtopic11/addtopic11.component';
import { Addquiz11Component } from './admin/dashboard/chapter/chapter11/addtopic11/addquiz11/addquiz11.component';
import { Addtopic12Component } from './admin/dashboard/chapter/chapter12/addtopic12/addtopic12.component';
import { Addquiz12Component } from './admin/dashboard/chapter/chapter12/addtopic12/addquiz12/addquiz12.component';
import { ChangepasswordComponent } from './userdash/changepassword/changepassword.component';
import { ChgpassComponent } from './chgpass/chgpass.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    ChapterComponent,
    // AddchapterComponent,
    AddrolesComponent,
    TopicComponent,
    Chapter1Component,
    AddtopicComponent,
    AddquizComponent,
    AddtecherComponent,
    UserdashComponent,
    UserchapterComponent,
    Chapter2Component,
    Addtopic2Component,
    Addquiz2Component,
    TeacherComponent,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
    Chapter6Component,
    Chapter7Component,
    Chapter8Component,
    Chapter9Component,
    Chapter10Component,
    Chapter11Component,
    Chapter12Component,
    Addtopic3Component,
    Addquiz3Component,
    Addtopic4Component,
    Addquiz4Component,
    Addtopic5Component,
    Addquiz5Component,
    Addtopic6Component,
    Addquiz6Component,
    Addtopic7Component,
    Addquiz7Component,
    Addtopic8Component,
    Addquiz8Component,
    Addtopic9Component,
    Addquiz9Component,
    Addtopic10Component,
    Addquiz10Component,
    Addtopic11Component,
    Addquiz11Component,
    Addtopic12Component,
    Addquiz12Component,
    ChangepasswordComponent,
    ChgpassComponent,
    ForgetpassComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
