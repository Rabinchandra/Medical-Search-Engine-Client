import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  patients = [
    {
      patientName: 'Mary Doe',
      doctorName: 'Dr. James Kelvin',
      profileImg:
        'https://i.pinimg.com/564x/4b/b9/d9/4bb9d9aea543288e30cd77a345a8f948.jpg',
      status: 'pending',
    },
    {
      patientName: 'Kelvin Lcien',
      doctorName: 'Dr. James Kelvin',
      profileImg:
        'https://i.pinimg.com/564x/4b/b9/d9/4bb9d9aea543288e30cd77a345a8f948.jpg',
      status: 'pending',
    },
    {
      patientName: 'Lucifer',
      doctorName: 'Dr. James Kelvin',
      profileImg:
        'https://i.pinimg.com/564x/4b/b9/d9/4bb9d9aea543288e30cd77a345a8f948.jpg',
      status: 'pending',
    },
  ];
}
