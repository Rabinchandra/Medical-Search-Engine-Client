import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { RouterLink } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-doctors',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-doctors.component.html',
  styleUrl: './admin-doctors.component.css',
})
export class AdminDoctorsComponent {
  filteredDoctors: IDoctor[] = [];

  inputFilter: string = '';

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.doctorService
      .getAllDoctors()
      .subscribe((docs) => (this.filteredDoctors = docs));
  }

  get doctors() {
    return this.doctorService.doctors;
  }

  search(value: string) {
    if (value.trim() == '') {
      this.filteredDoctors = this.doctors;
    } else {
      const regex = new RegExp(value, 'ig');
      this.filteredDoctors = this.doctors.filter(
        (d) => regex.test(d.name) || regex.test(d.speciality || '')
      );
    }
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
