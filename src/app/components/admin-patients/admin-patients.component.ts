import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-admin-patients',
  standalone: true,
  imports: [],
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

  constructor(private patientService: PatientService) {}

  ngOnInit() {}

  get patients() {
    return this.patientService.patients;
  }

  onClickRemovePatient(patientId: string) {
    console.log(patientId);
    if (confirm('Are you sure you want to remove?')) {
      this.patientService.deletePatient(patientId).subscribe(() => {
        // Remove from UI
        this.patientService.patients = this.patientService.patients.filter(
          (p) => p.patientId !== patientId
        );

        alert('Patient deleted successfully!');
      });
    }
  }
}
