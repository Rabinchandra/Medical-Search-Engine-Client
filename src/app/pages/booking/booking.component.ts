import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { IAppointment } from '../../../interface/IAppointment';
import { DoctorService } from '../../services/doctor.service';
import { IDoctor } from '../../../interface/IDoctor';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  // fields
  paramsId: string = '';
  currentDoctor: IDoctor | null = null;
  appointment: IAppointment = {
    doctorId: '',
    patientId: '',
    appointmentDate: '',
    appointmentTime: '',
    purpose: '',
  };

  dateTime = '';
  isBeingBooked = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointService: AppointmentService,
    private userService: UserService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    console.log(this.userService.currentUser);

    this.route.queryParams.subscribe((params) => {
      this.paramsId = params['id'];
      console.log(this.doctorService.doctors);
      // Get the current doctor using the params id  - (doctorId)
      this.doctorService
        .getDoctorById(this.paramsId)
        .subscribe((res) => (this.currentDoctor = res));
    });
  }

  book() {
    // Redirect to login page if the user hasn't login yet
    // if (!this.userService.currentUser) {
    //   this.router.navigateByUrl('/signin');
    // }

    const user = this.userService.currentUser;

    this.isBeingBooked = 'yes';

    if (user && this.dateTime !== '') {
      let date = this.dateTime.split('T')[0]; // extract date
      let time = this.dateTime.split('T')[1] + ':00'; // extract time

      this.appointment.doctorId = this.paramsId;
      this.appointment.patientId = user.uid;
      this.appointment.appointmentDate = date;
      this.appointment.appointmentTime = time;

      // Make an appointment
      this.appointService
        .makeAppointment(this.appointment)
        .subscribe((res) => (this.isBeingBooked = 'done'));
    }
  }
}
