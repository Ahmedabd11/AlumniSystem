import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  uri = 'http://localhost:4000/members';


  constructor(private http:HttpClient) { }
  addMember(MemberName,UniversityName,DepartmentName,GraduationYear,MemberBio,MemberAge)
  {
    const obj = {
      MemberName,
      UniversityName,
      DepartmentName,
      GraduationYear,
      MemberBio,
      MemberAge,
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`,obj).subscribe((res)=>console.log('Done'));
  }
  getMember(){
    return this.http.get(`${this.uri}`);
  }
  editMember(id){
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  updateMember(MemberName,UniversityName,DepartmentName,GraduationYear,MemberBio,MemberAge,id)
  {
    const obj = {
      MemberName,
      UniversityName,
      DepartmentName,
      GraduationYear,
      MemberBio,
      MemberAge,
    };
    this.http.post(`${this.uri}/update/${id}`,obj).subscribe((res)=>console.log('Done'));

  }
  DeleteMember(id)
  {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
