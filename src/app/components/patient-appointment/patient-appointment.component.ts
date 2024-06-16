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
  appointments: IAppointment[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const user = this.userService.currentUser;
    if (user) {
      this.appointmentService
        .getAllPatientAppointments(user.uid)
        .subscribe((app) => (this.appointments = app));
    }
  }
}
