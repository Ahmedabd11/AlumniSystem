import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  angForm:FormGroup;
  member: any={};
  constructor(private route:ActivatedRoute,private router:Router,private ms:MemberService,private fb:FormBuilder) 
  {
    this.createform();
   }
createform()
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
updateMember(MemberName,UniversityName,DepartmentName,GraduationYear,MemberBio,MemberAge)
{
  this.route.params.subscribe((Params)=>{
    this.ms.updateMember(MemberName,UniversityName,DepartmentName,GraduationYear,MemberBio,MemberAge,Params.id);
    this.router.navigate(['members']);

  });
}
  ngOnInit(): void {
    this.route.params.subscribe((Params)=>{
      this.ms.editMember(Params[`id`]).subscribe((res)=>{
        this.member=res;
      });
  });

}
}