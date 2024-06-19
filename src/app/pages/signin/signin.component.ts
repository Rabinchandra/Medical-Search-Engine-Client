import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { sideAlertMessage } from '../../../utility/utility';
import Swal from 'sweetalert2';

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

  constructor(private auth: AuthenticationService) {}

  onFormSubmit() {
    console.log('Forms submitted');
    console.log(this.user.email);

    this.auth
      .userSignIn(this.user.email, this.user.password)
      .then((res) => {
        sideAlertMessage('success', 'Sign in succesfully');
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      });
  }
}
