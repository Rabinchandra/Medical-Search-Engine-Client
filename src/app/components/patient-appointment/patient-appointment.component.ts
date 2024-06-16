import { Component } from '@angular/core';
import { IAppointment } from '../../../interface/IAppointment';
import { formatTime, formatDate } from '../../../utility/utility';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { UserService } from '../../services/user.service';

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
  ];

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const user = this.userService.currentUser;
    if (user) {
      this.appointmentService.getAllPatientAppointments(user.uid);
    }
  }
}
