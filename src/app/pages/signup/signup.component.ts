import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // Patient Attributes
  patient = {
    name: '',
    birth_date: '',
    contact_number: '',
    email: '',
    password: '',
    address: '',
    medical_history: '',
  };

  failureMessage = '';
  successMessage = '';

  constructor(private authService: AuthenticationService) {}

  onFormSubmit() {
    console.log('Forms submitted');
    console.log(this.patient.email);

    // Create a user with the given email and password
    this.authService
      .createUser(this.patient.email, this.patient.password, this.patient.name)
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
