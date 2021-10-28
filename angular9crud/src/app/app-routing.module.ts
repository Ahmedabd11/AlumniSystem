import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'member/create',
    component:MemberAddComponent,

  },
  {
    path:'edit/:id',
    component:MemberEditComponent,

  },
  {
    path:'members',
    component:MemberGetComponent,

  },
  {
    path:'login',
    component:LoginComponent,

  },
  {
    path:'home',
    component:HomeComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
