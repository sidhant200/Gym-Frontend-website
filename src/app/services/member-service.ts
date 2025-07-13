import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member';


@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  private baseUrl = 'http://localhost:8080/member';

  constructor(private http: HttpClient) { }

  // get all members 
  getAllMembers():Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl);

  }

  //delete member

  deleteMember(id:number):Observable<string>{
    return this.http.delete(`http://localhost:8080/member/${id}` , {responseType:'text'});

  }
}
