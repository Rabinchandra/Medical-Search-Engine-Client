import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { PatientService } from '../../services/patient.service';
import { IAppointmentDetails } from '../../../interface/IAppointmentDetails';

@Component({
  selector: 'app-admin-manage-appointments',
  standalone: true,
  imports: [],
  templateUrl: './admin-manage-appointments.component.html',
  styleUrl: './admin-manage-appointments.component.css',
})
export class AdminManageAppointmentsComponent {
  appointments: IAppointmentDetails[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.appointmentService.getAllAppointmentsDetails().subscribe((result) => {
      this.appointments = result;
    });
  }

  currentTab = 'pending';

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }
}
