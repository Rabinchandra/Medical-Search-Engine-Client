import { Component } from '@angular/core';
import { IAppointment } from '../../../interface/IAppointment';
import { formatTime, formatDate } from '../../../utility/utility';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-appointment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './patient-appointment.component.html',
  styleUrl: './patient-appointment.component.css',
})
export class PatientAppointmentComponent {
  appointments: IAppointment[] = [
    {
      appointment_id: 1,
      appointment_date: new Date('2024-06-14'),
      appointment_time: new Date('2024-06-14T09:00:00'), // Time portion only
      status: 'accepted',
      purpose: 'Dental Checkup',
    },
    {
      appointment_id: 2,
      appointment_date: new Date('2024-06-15'),
      appointment_time: new Date('2024-06-15T14:30:00'), // Time portion only
      status: 'pending',
      purpose: 'Business Meeting',
    },
    {
      appointment_id: 3,
      appointment_date: new Date('2024-06-16'),
      appointment_time: new Date('2024-06-16T11:00:00'), // Time portion only
      status: 'pending',
      purpose: 'Consultation',
    },
  ];

  _formatTime(input: Date) {
    return formatTime(input);
  }

  _formatDate(input: Date) {
    return formatDate(input);
  }
}
