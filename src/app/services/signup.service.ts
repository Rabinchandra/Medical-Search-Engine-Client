import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPatient } from '../../interface/IPatient';
import { IUser } from '../../interface/IUser';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { FirebaseError } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
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
}
