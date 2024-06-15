import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-add-doctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-add-doctor.component.html',
  styleUrl: './admin-add-doctor.component.css',
})
export class AdminAddDoctorComponent {
  doctor: IDoctor = {
    doctor_id: 0,
    name: '',
    availability: '',
    contact_number: '',
    email: '',
    profileImgUrl: '',
    rating: 4,
    specialty: '',
  };

  password: string = '';

  onFormSubmit() {
    // Create the user first in the firebase
    // Then post the data to the SQL database
    console.log(this.doctor);
  }
}
