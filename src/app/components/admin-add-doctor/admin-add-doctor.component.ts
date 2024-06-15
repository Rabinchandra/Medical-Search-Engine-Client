import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../../services/signup.service';

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

  // {
  //   "doctorId": "JgBGjgc0SNWbl43xvsbb2TVrXCx2",
  //   "name": "Dr. Klalen",
  //   "speciality": "Neurologist",
  //   "contactNumber": "+81555555555",
  //   "email": "klalen@gmail.com",
  //   "availability": 1,
  //   "profileImgUrl": "testurl.com"
  // }

  constructor(private signupService: SignupService) {}

  onFormSubmit() {
    // Create the user first in the firebase
    // Then post the data to the SQL database
    console.log('Submit', this.doctor);

    this.signupService.createDoctor(this.doctor).then((res) => {
      console.log(res);
    });
  }
}
