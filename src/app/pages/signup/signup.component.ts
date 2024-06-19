import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPatient } from '../../../interface/IPatient';
import { SignupService } from '../../services/signup.service';
import Swal from 'sweetalert2';

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

  isSigningUp = false;

  constructor(private signupService: SignupService) {}

  onFormSubmit() {
    console.log('Forms submitted');
    // console.log(this.patient);

    this.isSigningUp = true;

    // Create a user with the given email and password
    this.signupService
      .createPatient(this.patient)
      .then((res) => {
        console.log(res);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succesfully signup!',
          showConfirmButton: false,
          timer: 2000,
        });

        this.isSigningUp = false;
      })
      .catch((err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Fail to sign up ' + err,
          showConfirmButton: false,
          timer: 3000,
        });

        this.isSigningUp = false;
      });
  }
}
