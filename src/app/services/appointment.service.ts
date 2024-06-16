import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppointment } from '../../interface/IAppointment';
import { IAppointmentDetails } from '../../interface/IAppointmentDetails';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  // api url
  private appointmentApiUrl = `https://localhost:7104/api/appointment`;
  private appointmentDetailsApiUrl = `https://localhost:7104/api/appointment/details`;
  private patientAppointmentApiUrl = `https://localhost:7104/api/appointment/patient/`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Method that returns all the appointments of a particular patient
  getAllPatientAppointments(patientId: string) {
    console.log('patient appointments', patientId);
    return this.http.get<IAppointment[]>(
      this.patientAppointmentApiUrl + patientId
    );
  }

  // Method that returns all the appointments of all patients - called by an Admin User
  getAllAppointmentsDetails() {
    return this.http.get<IAppointmentDetails[]>(this.appointmentDetailsApiUrl);
  }

  makeAppointment(apppointment: IAppointment) {
    console.log('making appointment...', apppointment);

    return this.http.post(
      this.appointmentApiUrl,
      JSON.stringify(apppointment),
      this.httpOptions
    );
  }

  acceptAppointment(appointmentId: number) {
    return this.http.get(`${this.appointmentApiUrl}/accept/${appointmentId}`);
  }
}
