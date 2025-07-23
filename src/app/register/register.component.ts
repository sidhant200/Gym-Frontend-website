import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService , private router: Router ){}

  Login(){
    console.log('logged in')
    this.authService.login({username: this.username , password: this.password})
    
    .subscribe({
      next:(res:any) =>{
        this.authService.setToken(res.token);
        this.router.navigate(['/admin/member'])
      },
      error:err=>{
        alert('login failedx')
      }
    });
  }

}
