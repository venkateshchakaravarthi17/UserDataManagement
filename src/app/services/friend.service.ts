import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  email: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private initialFriends: Friend[] = [
    { id: 1, firstName: 'Venkatesh', lastName: 'Chakaravarthi', department: 'ECE', email: 'venkat@gmail.com', country: 'India' },
    { id: 2, firstName: 'Vishnu', lastName: 'Kumar', department: 'Mech', email: 'vishnu@gmail.com', country: 'China' },
    { id: 3, firstName: 'Swapna', lastName: 'Pushparaj', department: 'EEE', email: 'swapna@gmail.com', country: 'UK' },
    { id: 4, firstName: 'Dhivya', lastName: 'Bharathi', department: 'IT', email: 'dhivya@gmail.com', country: 'USA' },
    { id: 5, firstName: 'Rohith', lastName: 'Sharma', department: 'EI', email: 'rohith@gmail.com', country: 'Canada' },
    { id: 6, firstName: 'Virat', lastName: 'Kohli', department: 'AE', email: 'kohli@gmail.com', country: 'Japan' }
  ];

  private friendsSubject = new BehaviorSubject<Friend[]>(this.initialFriends);
  private currentId = this.initialFriends.length + 1;

  getFriends(): Observable<Friend[]> {
    return this.friendsSubject.asObservable();
  }

  addFriend(friendData: Omit<Friend, 'id'>): void {
    const newFriend: Friend = {
      id: this.currentId++,
      ...friendData
    };
    const updated = [...this.friendsSubject.getValue(), newFriend];
    this.friendsSubject.next(updated);
  }
}
