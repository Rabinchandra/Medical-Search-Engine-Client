import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { RouterLink } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(31, 113, 255)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctorService.removeDoctor(doctorId).subscribe((res) => {
          // Relect the changes in the UI
          this.doctorService.doctors = this.doctorService.doctors.filter(
            (d) => d.doctorId !== doctorId
          );

          Swal.fire({
            title: 'Deleted!',
            text: 'User has been deleted.',
            icon: 'success',
          });
        });
      }
    });
  }
}
