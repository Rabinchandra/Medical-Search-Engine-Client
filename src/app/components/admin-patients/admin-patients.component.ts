import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { IPatient } from '../../../interface/IPatient';

@Component({
  selector: 'app-admin-patients',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-patients.component.html',
  styleUrl: './admin-patients.component.css',
})
export class AdminPatientsComponent {
  // patients = [
  //   {
  //     patientName: 'Mary Doe',
  //     doctorName: 'Dr. James Kelvin',
  //     profileImg:
  //       'https://i.pinimg.com/564x/4b/b9/d9/4bb9d9aea543288e30cd77a345a8f948.jpg',
  //     email: 'test@gmail.com',
  //     contact_number: '+81203910293',
  //   },
  //   {
  //     patientName: 'Kelvin Lcien',
  //     doctorName: 'Dr. James Kelvin',
  //     profileImg:
  //       'https://i.pinimg.com/564x/4b/b9/d9/4bb9d9aea543288e30cd77a345a8f948.jpg',
  //     email: 'test@gmail.com',
  //     contact_number: '+81203910293',
  //   },
  //   {
  //     patientName: 'Lucifer',
  //     doctorName: 'Dr. James Kelvin',
  //     profileImg:
  //       'https://i.pinimg.com/564x/4b/b9/d9/4bb9d9aea543288e30cd77a345a8f948.jpg',
  //     email: 'test@gmail.com',
  //     contact_number: '+81203910293',
  //   },
  // ];

  searchInput = '';
  filteredPatients: IPatient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService
      .getAllPatients()
      .subscribe((result) => (this.filteredPatients = result));
  }

  get patients() {
    return this.patientService.patients;
  }

  search(value: string) {
    if (value.trim() == '') {
      this.filteredPatients = this.patients;
    } else {
      const regex = new RegExp(value, 'ig');
      this.filteredPatients = this.patients.filter((p) => regex.test(p.name));
    }
  }

  onClickRemovePatient(patientId: string) {
    console.log(patientId);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(31, 113, 255)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      // if user confirms
      if (result.isConfirmed) {
        this.patientService.deletePatient(patientId).subscribe(() => {
          // Remove from UI
          this.patientService.patients = this.patientService.patients.filter(
            (p) => p.patientId !== patientId
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
