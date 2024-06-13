import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-manage-appointments',
  standalone: true,
  imports: [],
  templateUrl: './admin-manage-appointments.component.html',
  styleUrl: './admin-manage-appointments.component.css',
})
export class AdminManageAppointmentsComponent {
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

  currentTab = 'pending';

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }
}
