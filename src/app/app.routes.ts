import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConsultDoctorComponent } from './pages/consult-doctor/consult-doctor.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'consult-doctor',
    component: ConsultDoctorComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
];
