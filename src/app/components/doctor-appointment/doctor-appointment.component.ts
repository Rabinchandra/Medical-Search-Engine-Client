import { Component } from '@angular/core';
import { formatTime, formatDate, getTodayDate } from '../../../utility/utility';
import { IAppointment } from '../../../interface/IAppointment';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { UserService } from '../../services/user.service';
import { IAppointmentDetails } from '../../../interface/IAppointmentDetails';

@Component({
  selector: 'app-doctor-appointment',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctor-appointment.component.html',
  styleUrl: './doctor-appointment.component.css',
})
export class DoctorAppointmentComponent {
  currentTab = 'today';

  isLoading = true;

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService
  ) {}

  appointments: IAppointmentDetails[] = [];
  todayAppointments: IAppointmentDetails[] = [];
  upcomingAppointments: IAppointmentDetails[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      const user = this.userService.currentUser;
      if (user) {
        this.appointmentService
          .getAppointmentsOfDoctor(user.uid)
          .subscribe((app) => {
            const todayDate = getTodayDate();
            this.appointments = app;
            // Today appointments
            this.todayAppointments = app.filter(
              (a) => a.appointmentDate == todayDate
            );
            // Upcoming Appointments
            this.upcomingAppointments = app.filter(
              (a) => a.appointmentDate !== todayDate
            );

            console.log(todayDate);
            this.isLoading = false;
          });
      }
    }, 1000);
  }
}
