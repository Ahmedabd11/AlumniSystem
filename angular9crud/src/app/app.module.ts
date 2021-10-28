import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MemberService } from './member.service';



import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberAddComponent,
    MemberGetComponent,
    MemberEditComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
