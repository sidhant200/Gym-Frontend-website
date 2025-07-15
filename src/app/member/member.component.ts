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
  searchForm = {
  name: '',
  email: '',
  phone: ''

};

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

   searchPerformed = false;

onSearch() {
  this.memberService.search(
    this.searchForm.name,
    this.searchForm.email,
    this.searchForm.phone,
    
  ).subscribe({
    next: (data) => {
      console.log("🔍 Search result:", data);
      this.members = data;
      this.searchPerformed = true;
    },
    error: (err) => {
      console.error('Search error', err);
      this.members = [];
      this.searchPerformed = true;
    }
  });
}

    

    onReset(){

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

  onMemberCreated(): void {
  this.closeModal();      // Close the create modal
  this.getAllMembers();   // Refresh the member list
}


  

}
