import { Injectable } from '@angular/core';
import { IDoctor } from '../../interface/IDoctor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  doctors: IDoctor[] = [];

  private apiUrl = 'https://localhost:7104/api/Doctor';

  constructor(private http: HttpClient) {
    this.getAllDoctors().subscribe((res) => (this.doctors = res));
  }

  getAllDoctors() {
    return this.http.get<IDoctor[]>(this.apiUrl);
  }

  getDoctorById(doctorId: string) {
    return this.http.get<IDoctor>(this.apiUrl + '/' + doctorId);
  }
}
