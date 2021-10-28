import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userId:string='';
  Login:string="LOGIN";
  password:string='';
  message:string='';
  constructor(private router:Router) { }
  signin()
  {
    if(this.userId == 'admin' && this.password == 'admin')
    {
      this.router.navigateByUrl('home');
    }
    else{
      this.message = 'invalid login ID or password';
    }
    
  }

  ngOnInit(): void {
  }

}
