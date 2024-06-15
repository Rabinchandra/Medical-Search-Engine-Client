import { Injectable } from '@angular/core';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { IUser } from '../../interface/IUser';
import { HttpClient } from '@angular/common/http';
import { IUserRole } from '../../interface/IUserRole';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: IUser | null = null;

  // api end point
  private userRoleApiUrl = 'https://localhost:7104/api/UserRoles';

  constructor(private http: HttpClient) {}

  logout() {
    signOut(auth);
  }

  getUserRole(id: string) {
    return this.http.get<IUserRole>(`${this.userRoleApiUrl}/${id}`);
  }
}
