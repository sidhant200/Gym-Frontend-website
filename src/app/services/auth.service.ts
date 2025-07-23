import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginRequest } from '../models/loginRequest'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseURL = `http://localhost:8080/auth`;

  constructor(private http: HttpClient , private router: Router) { }

    login(credientials: LoginRequest){
      return this.http.post(`${this.baseURL}/login` , credientials);

     
    }
    register(data:any){
      return this.http.post(`${this.baseURL}/register` , data);
    }

    setToken(token: string){
      localStorage.setItem('jwtToken' , token);
      
    }

    getToken(): string | null{
      return localStorage.getItem('jwtToken');


    }

    isLoggedin(): boolean{
      return  !!this.getToken();
    }

    logout(){
      localStorage.removeItem('jwtToken');
      this.router.navigate(['/register'])
    }

 
}
