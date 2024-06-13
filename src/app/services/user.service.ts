import { Injectable } from '@angular/core';
import { User, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User | null = null;

  constructor() {}

  logout() {
    signOut(auth);
  }
}
