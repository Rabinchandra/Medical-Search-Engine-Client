import { Injectable } from '@angular/core';
import { User, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userSignIn(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          resolve(res.user);
        })
        .catch((err) => {
          const errCode = err.code;
          if (errCode === 'auth/invalid-credential') {
            reject('Login fail! Please provide valid email/password :(');
          }
        });
    });
  }

  
}
