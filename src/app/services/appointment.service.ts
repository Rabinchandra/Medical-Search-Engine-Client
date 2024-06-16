import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppointment } from '../../interface/IAppointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  // api url
  private appointmentApiUrl = `https://localhost:7104/api/appointment`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllPatientAppointments(patientId: string) {
    console.log('patient appointments', patientId);
  }

  makeAppointment(apppointment: IAppointment) {
    console.log('making appointment...', apppointment);

    return this.http.post(
      this.appointmentApiUrl,
      JSON.stringify(apppointment),
      this.httpOptions
    );
    // {
    //   "doctorId": "string",
    //   "patientId": "string",
    //   "appointmentDate": "2024-03-20"
    //   "appointmentTime": "hh:tt:ss"
    //   "purpose": "string"
    // }
  }
}
