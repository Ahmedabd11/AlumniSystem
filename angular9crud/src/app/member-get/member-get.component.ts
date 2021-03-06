import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import {Member} from '../Member';

@Component({
  selector: 'app-member-get',
  templateUrl: './member-get.component.html',
  styleUrls: ['./member-get.component.css']
})
export class MemberGetComponent implements OnInit {
  members:Member[];

  constructor(private ms:MemberService) { }
  DeleteMember(id,index)
  {
    this.ms.DeleteMember(id).subscribe(res=>{
      this.members.splice(index,1);
    });
  }

  ngOnInit(): void {
    this.ms.getMember().subscribe((data:Member[])=>{
      this.members=data;

    });
  }

}
