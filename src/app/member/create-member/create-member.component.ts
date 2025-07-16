import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; // ✅ This is important

import { Member } from 'src/app/models/member';
import { MemberComponent } from '../member.component';
import { MemberServiceService } from 'src/app/services/member-service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {

  constructor(private memberService: MemberServiceService , private memberComponent : MemberComponent , private router : Router){}
 member: Member = {
    name: '',
    phone: '',
    email: '',
    membershipType: ''
  };

  errorMessage: string = '';

  @Output() memberCreated = new EventEmitter<void>();

  onSubmit(){
    this.createMember(this.member);
    this.memberComponent.getAllMembers();
   
    
  }

  createMember(member: Member):void{
    this.memberService.createMember(this.member).subscribe({
      next: (data)=>{
        console.log('member created succesfull' , data);
        this.memberCreated.emit();


      },
       error: (err) => {
    console.error('❌ Error:', err);

    // If backend returns plain text error (like "Email already exists")
    alert(err.error);
   if (err.status === 409) {
      // ✅ Show custom message for 409 error
      this.errorMessage = '❌ A member with this email or phone already exists.';
    } else {
      // Handle other errors
      this.errorMessage = '❌ Something went wrong. Please try again.';
    }
      
    }
   

  });

  }
}

