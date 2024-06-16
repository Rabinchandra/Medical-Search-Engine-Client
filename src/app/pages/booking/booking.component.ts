import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { IAppointment } from '../../../interface/IAppointment';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  constructor(
    private route: ActivatedRoute,
    private appointService: AppointmentService,
    private userService: UserService
  ) {}

  id: number = 0;

  appointment: IAppointment = {
    doctorId: 'qHYME9mcBEQgQgMjfKEqkCoVnv03', // doctor francis
    patientId: '',
    appointmentDate: '',
    appointmentTime: '',
    purpose: '',
  };

  dateTime = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  book() {
    console.clear();
    const user = this.userService.currentUser;

    if (user && this.dateTime !== '') {
      let date = this.dateTime.split('T')[0]; // extract date
      let time = this.dateTime.split('T')[1] + ':00'; // extract time

      console.log(date, time);
      this.appointment.patientId = user.uid;
      this.appointment.appointmentDate = date;
      this.appointment.appointmentTime = time;
      // Make an appointment
      this.appointService.makeAppointment(this.appointment).subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log('Error', err);
        },
      });
    }
  }
}
