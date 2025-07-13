import { Component } from '@angular/core';
import { Member } from '../models/member'
import { MemberServiceService } from '../services/member-service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  members: Member[] = [];

  constructor(private memberService : MemberServiceService , private router: Router , private route: ActivatedRoute){}

  ngOnInit(): void {
    this.memberService.getAllMembers().subscribe({
      next:(data)=>{
        this.members = data;

      },
       error: (err) => {
        console.error('Error fetching members:', err);
      }
    })

  }
  ondeleteMember(id: number): void {
    this.memberService.deleteMember(id).subscribe({
      next: ()=>{
        alert('member deleted succesfull');
        this.getAllMembers();
        

      },
      error:(err)=>{
        console.error('error found while deleting');
      }

      
    })
  
  }
   getAllMembers():void{
      this.memberService.getAllMembers().subscribe({
        next:(data)=>{
          this.members = data
        }

      })
    }


    
  

   showModal = false;      // For create modal
  showEditModal = false;  // For edit modal
  selectedMember!: Member | null;  // Member selected for editing

  // Opens create member modal
  openModal(): void {
    this.showModal = true;
  }

  // Closes create member modal
  closeModal(): void {
    this.showModal = false;
  }

  // Opens edit modal and sets the selected member to edit
  openEditModal(member: Member): void {
    this.selectedMember = member;
    this.showEditModal = true;
  }

  // Closes edit modal
  closeEditModal(): void {
    this.showEditModal = false;
  }

  // Called when update form emits the 'updated' event
  onMemberUpdated(): void {
    this.closeEditModal();  // Close the edit modal
    this.getAllMembers();     // Reload member list to reflect changes
  }

  

}
