import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { Router } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-consult-doctor',
  standalone: true,
  imports: [],
  templateUrl: './consult-doctor.component.html',
  styleUrl: './consult-doctor.component.css',
})
export class ConsultDoctorComponent {
  constructor(private router: Router, private doctorService: DoctorService) {}

  get doctors() {
    return this.doctorService.doctors;
  }

  goToBooking(doctorId: string) {
    this.router.navigate(['/booking'], {
      queryParams: {
        id: doctorId,
      },
    });
  }
}
