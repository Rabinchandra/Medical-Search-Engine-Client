import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-doctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-add-doctor.component.html',
  styleUrl: './admin-add-doctor.component.css',
})
export class AdminAddDoctorComponent {
  doctor: IDoctor = {
    doctorId: '0',
    name: '',
    availability: 1,
    contactNumber: '',
    email: '',
    password: '',
    profileImgUrl: '',
    speciality: '',
  };

  isAdding = false;

  constructor(private signupService: SignupService) {}

  onFormSubmit() {
    // Create the user first in the firebase
    // Then post the data to the SQL database
    console.log('Submit', this.doctor);

    this.isAdding = true;

    this.signupService.createDoctor(this.doctor).then((res) => {
      console.log(res);
      this.isAdding = false;
      Swal.fire({
        icon: 'success',
        text: 'Doctor added successfully',
      });
    });
  }
}
