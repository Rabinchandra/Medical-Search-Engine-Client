import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { RouterLink } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-admin-doctors',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-doctors.component.html',
  styleUrl: './admin-doctors.component.css',
})
export class AdminDoctorsComponent {
  constructor(private doctorService: DoctorService) {}

  get doctors() {
    return this.doctorService.doctors;
  }
}
