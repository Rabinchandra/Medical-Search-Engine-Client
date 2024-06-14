import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AdminManageAppointmentsComponent } from '../../components/admin-manage-appointments/admin-manage-appointments.component';
import { PatientAppointmentComponent } from '../../components/patient-appointment/patient-appointment.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [AdminManageAppointmentsComponent, PatientAppointmentComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  constructor(private userService: UserService) {}

  get currentUser() {
    return this.userService.currentUser;
  }
}
