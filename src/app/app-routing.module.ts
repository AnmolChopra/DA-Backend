import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './admin/dashboard/guards/auth.guard';
import { ChapterComponent } from './admin/dashboard/chapter/chapter.component';
import { TopicComponent } from './admin/dashboard/topic/topic.component';
import { AddrolesComponent } from './admin/dashboard/addroles/addroles.component';
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
import { UserGuard } from './userdash/userguard/user.guard';
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




const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'chgpass',component:ChgpassComponent},
  {path:'forgetpass',component:ForgetpassComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
children:[
  {path:'addroles',component:AddrolesComponent,children:[
    {path:'addteacher',component:AddtecherComponent}
  ]},
  {path:'chapter',component:ChapterComponent,children:[
    {path:'chapter1',component:Chapter1Component,children:[
      {path:'addtopic',component:AddtopicComponent,children:[
        {path:'addquiz',component:AddquizComponent}
      ]},
    ]},
    {path:'chapter2',component:Chapter2Component,children:[
      {path:'addtopic2',component:Addtopic2Component,children:[
        {path:'addquiz2',component:Addquiz2Component}
      ]}
    ]},
    {path:'chapter3',component:Chapter3Component,children:[
      {path:'addtopic3',component:Addtopic3Component,children:[
        {path:'addquiz3',component:Addquiz3Component}
      ]}
    ]},
  {path:'chapter4',component:Chapter4Component,children:[
    {path:'addtopic4',component:Addtopic4Component,children:[
      {path:'addquiz4',component:Addquiz4Component}
    ]}
  ]},
  {path:'chapter5',component:Chapter5Component,children:[
    {path:'addtopic5',component:Addtopic5Component,children:[
      {path:'addquiz5',component:Addquiz5Component}
    ]}
  ]},
  {path:'chapter6',component:Chapter6Component,children:[
    {path:'addtopic6',component:Addtopic6Component,children:[
      {path:'addquiz6',component:Addquiz6Component}
    ]}
  ]},
  {path:'chapter7',component:Chapter7Component,children:[
    {path:'addtopic7',component:Addtopic7Component,children:[
      {path:'addquiz7',component:Addquiz7Component}
    ]}
  ]},
  {path:'chapter8',component:Chapter8Component,children:[
    {path:'addtopic8',component:Addtopic8Component,children:[
      {path:'addquiz8',component:Addquiz8Component}
    ]}
  ]},
  {path:'chapter9',component:Chapter9Component,children:[
    {path:'addtopic9',component:Addtopic9Component,children:[
      {path:'addquiz9',component:Addquiz9Component}
    ]}
  ]},
  {path:'chapter10',component:Chapter10Component,children:[
    {path:'addtopic10',component:Addtopic10Component,children:[
      {path:'addquiz10',component:Addquiz10Component}
    ]}
  ]},
  {path:'chapter11',component:Chapter11Component,children:[
    {path:'addtopic11',component:Addtopic11Component,children:[
      {path:'addquiz11',component:Addquiz11Component}
    ]}
  ]},
  {path:'chapter12',component:Chapter12Component,children:[
    {path:'addtopic12',component:Addtopic12Component,children:[
      {path:'addquiz12',component:Addquiz12Component}
    ]}
  ]},
  ]},
  

  {path:'topic',component:TopicComponent}
]},
{path:'teacher',component:TeacherComponent},
{path:'',redirectTo:'/userdash',pathMatch:'full'},
{path:'userdash',component:UserdashComponent,children:[
  {path:'userchapter',component:UserchapterComponent,canActivate:[UserGuard]},
  {path:'changepassword',component:ChangepasswordComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
