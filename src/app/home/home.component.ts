import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FriendService } from '../services/friend.service';
import { Observable } from 'rxjs';
import { Friend } from '../services/friend.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends$!: Observable<Friend[]>;

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
     this.friends$ = this.friendService.getFriends();
  }
}
