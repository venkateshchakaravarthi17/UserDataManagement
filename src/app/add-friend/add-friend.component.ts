import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-add-friend',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-friend.component.html',
})
export class AddFriendComponent {
  friendForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private friendService: FriendService,
    private router: Router
  ) {
    this.friendForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.friendForm.valid) {
      this.friendService.addFriend(this.friendForm.value);
      this.router.navigate(['/']);
    }
  }
}
