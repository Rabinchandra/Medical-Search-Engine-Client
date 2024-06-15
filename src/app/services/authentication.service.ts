import { Injectable } from '@angular/core';
import {
  User,
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { FirebaseError } from 'firebase/app';
import { IUser } from '../../interface/IUser';
import { IPatient } from '../../interface/IPatient';
import { IDoctor } from '../../interface/IDoctor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // Api Urls
  private patientSignupApiUrl = 'https://localhost:7075/api/signup/patient';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createPatient(patient: IPatient): Promise<IUser | null> {
    console.log('Creating patient...');

    return new Promise(async (resolve, reject) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          patient.email,
          patient.password
        );

        const user = userCredential.user;

        updateProfile(user, {
          displayName: patient.name,
          photoURL: patient.profileImgUrl,
        });

        // Update the Patient id
        patient.patientId = user.uid;

        // Create a patient to the SQL Server Database

        this.http
          .post(
            this.patientSignupApiUrl,
            JSON.stringify(patient),
            this.httpOptions
          )
          .subscribe({
            next: (res) => {
              console.log(res);
              resolve(user);
            },
            error: (err) => {
              console.log(err);
              deleteUser(user);
            },
          });
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
            reject('Login fail! Please provide valid email/password :(');
          }
        });
    });
  }
}
