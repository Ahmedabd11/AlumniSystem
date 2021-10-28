import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcom:string='WELCOME';
  constructor(private router:Router) { }

getdata()
{
  this.router.navigateByUrl('members');
}
createdata()
{
  this.router.navigateByUrl('member/create');
}
  ngOnInit(): void {
  }

}
