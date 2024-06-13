import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  // Patient Attributes
  user = {
    email: '',
    password: '',
  };

  failureMessage = '';
  successMessage = '';

  constructor(private auth: AuthenticationService) {}

  onFormSubmit() {
    console.log('Forms submitted');
    console.log(this.user.email);

    this.auth
      .userSignIn(this.user.email, this.user.password)
      .then((res) => {
        this.successMessage = 'User succesfully login!';

        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      })
      .catch((err) => {
        this.failureMessage = err;

        setTimeout(() => {
          this.failureMessage = '';
        }, 5000);
      });
  }
}
