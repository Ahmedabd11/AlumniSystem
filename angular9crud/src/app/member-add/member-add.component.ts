import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { from } from 'rxjs';
import {Router} from '@angular/router';
import {MemberService} from '../member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
 
  angForm:FormGroup;
  constructor(private fb:FormBuilder,private ms:MemberService,private router:Router)
   {
     this.createForm(); 

  }
  createForm()
  {
    this.angForm = this.fb.group({
      MemberName:['',Validators.required],
      UniversityName:['',Validators.required],
      DepartmentName:['',Validators.required],
      GraduationYear:['',Validators.required],
      MemberBio:['',Validators.required],
      MemberAge:['',Validators.required],
    });

  }
  addMember(MemberName, UniversityName,DepartmentName,GraduationYear,MemberBio,MemberAge)
  {
    this.ms.addMember(MemberName,UniversityName,DepartmentName,GraduationYear,MemberBio,MemberAge);
    
  }

  ngOnInit(): void {
  }

}
