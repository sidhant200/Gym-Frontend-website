import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberComponent } from '../member.component';
import { MemberServiceService } from 'src/app/services/member-service';


@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent {
  constructor(private memberService : MemberServiceService){}
 @Input() member: Member | null = null;
  @Output() memberUpdated = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  // Your form logic here...

   onSubmit() {
    if (this.member && this.member.id) {
      this.memberService.updateMember(this.member.id, this.member).subscribe({
        next: () => {
          this.memberUpdated.emit(); // tell parent update done
          this.closeModal.emit();    // close modal
        },
        error: (err) => {
          console.error('Update error:', err);
        }
      });
    }
  }

  onCancel() {
    this.closeModal.emit(); // close modal without update
  }
}
    

