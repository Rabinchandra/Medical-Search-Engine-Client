import { Component } from '@angular/core';
import { formatTime, formatDate } from '../../../utility/utility';
import { IAppointment } from '../../../interface/IAppointment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-appointment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctor-appointment.component.html',
  styleUrl: './doctor-appointment.component.css',
})
export class DoctorAppointmentComponent {
  currentTab = 'today';

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

  appointments: IAppointment[] = [
    {
      appointmentId: 1,
      appointmentDate: '2024-06-14',
      appointmentTime: '10:00:00', // Time portion only
      status: 'accepted',
      purpose: 'Dental Checkup',
    },
    {
      appointmentId: 2,
      appointmentDate: '2024-06-14',
      appointmentTime: '10:00:00', // Time portion only
      status: 'pending',
      purpose: 'Business Meeting',
    },
    {
      appointmentId: 3,
      appointmentDate: '2024-06-14',
      appointmentTime: '10:00:00', // Time portion only
      status: 'pending',
      purpose: 'Consultation',
    },
  ];
}
