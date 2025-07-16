import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Member } from '../models/member';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


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

  //create member

 createMember(member: Member): Observable<Member> {
  return this.http.post<Member>(`${this.baseUrl}`, member).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 409) {
        // Customize error message based on backend message
        return throwError(() => new Error(error.error || 'Duplicate email or phone'));
      }
      return throwError(() => error);
    })
  );
}

updateMember(id: number , member:Member):Observable<Member>{
  return this.http.put<Member>(`${this.baseUrl}/${id}` , member).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 500) {
        // Customize error message based on backend message
        return throwError(() => new Error(error.error || 'Duplicate email or phone'));
      }
      return throwError(() => error);
    })
  );
}


  search(name?: string, email?: string, phone?: string, id?: number): Observable<any[]> {
  let params = new HttpParams();
  if (name) params = params.set('name', name);
  if (email) params = params.set('email', email);
  if (phone) params = params.set('phone', phone);
  if (id !== undefined && id !== null) params = params.set('id', id.toString());

  return this.http.get<any[]>(`http://localhost:8080/member/search`, { params });
}

}
