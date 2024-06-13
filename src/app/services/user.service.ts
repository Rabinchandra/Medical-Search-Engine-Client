import { Injectable } from '@angular/core';
import { User, signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { IUser } from '../../interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: IUser | null = null;

  constructor() {}

  logout() {
    signOut(auth);
  }
}
