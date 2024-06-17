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

  ngOnInit() {}

  get doctors() {
    return this.doctorService.doctors;
  }

  onRemoveDoctor(doctorId: string) {
    if (confirm('Are you sure you want to delete?')) {
      this.doctorService.removeDoctor(doctorId).subscribe((res) => {
        // Relect the changes in the UI
        this.doctorService.doctors = this.doctorService.doctors.filter(
          (d) => d.doctorId !== doctorId
        );

        alert('Doctor deleted successfully!');
      });
    }
  }
}
