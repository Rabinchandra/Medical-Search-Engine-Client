import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConsultDoctorComponent } from './pages/consult-doctor/consult-doctor.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AdminDoctorsComponent } from './components/admin-doctors/admin-doctors.component';
import { AdminPatientsComponent } from './components/admin-patients/admin-patients.component';
import { AdminAddDoctorComponent } from './components/admin-add-doctor/admin-add-doctor.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { DoctorAppointmentComponent } from './components/doctor-appointment/doctor-appointment.component';
import { SearchEngineComponent } from './pages/search-engine/search-engine.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search-engine',
    component: SearchEngineComponent,
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
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'admin-doctors',
    component: AdminDoctorsComponent,
  },
  {
    path: 'admin-patients',
    component: AdminPatientsComponent,
  },
  {
    path: 'admin-add-doctor',
    component: AdminAddDoctorComponent,
  },
  {
    path: 'meeting/:id',
    component: MeetingComponent,
  },
  {
    path: 'doctor-appointment',
    component: DoctorAppointmentComponent,
  },
];
