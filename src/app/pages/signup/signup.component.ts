import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPatient } from '../../../interface/IPatient';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // Patient Attributes
  patient: IPatient = {
    patientId: '',
    name: '',
    birthDate: '',
    contactNumber: '',
    email: '',
    password: '',
    address: '',
    medicalHistory: '',
    profileImgUrl: '',
  };

  failureMessage = '';
  successMessage = '';

  constructor(private signupService: SignupService) {}

  onFormSubmit() {
    console.log('Forms submitted');
    console.log(this.patient);

    // Create a user with the given email and password
    this.signupService
      .createPatient(this.patient)
      .then((res) => {
        console.log(res);

        this.successMessage = 'Successfully created an account :) !!';

        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      })
      .catch((err) => {
        this.failureMessage = err + ' :(';

        setTimeout(() => {
          this.failureMessage = '';
        }, 3000);
      });
  }
}
