import { Injectable } from '@angular/core';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { FirebaseError } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  createUser(email: string, password: string): Promise<User | null> {
    console.log('Creating user...');

    return new Promise(async (resolve, reject) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        resolve(user);
      } catch (error) {
        if (error instanceof FirebaseError) {
          let msg = error.code;
          // Checking for types of error
          switch (msg) {
            case 'auth/invalid-email':
              msg = 'Please provide a valid Email';
              break;
            case 'auth/weak-password':
              msg = 'Password is weak';
              break;
            case 'auth/missing-password':
              msg = 'Your should fill the password';
              break;
            case 'auth/email-already-in-use':
              msg = 'Email already in use. Try other email';
              break;
            default:
              msg = msg;
          }

          reject(msg);
        } else {
          reject('Something went wrong!');
        }
      }
    });
  }

  userSignIn(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          resolve(res.user);
        })
        .catch((err) => {
          const errCode = err.code;
          if (errCode === 'auth/invalid-credential') {
            reject('Login fail! Invalid credentials!!');
          }
        });
    });
  }
}
