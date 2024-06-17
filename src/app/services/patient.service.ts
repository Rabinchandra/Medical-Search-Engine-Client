import { Injectable } from '@angular/core';
import { IPatient } from '../../interface/IPatient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patients: IPatient[] = [];

  private patientApiUrl = `https://localhost:7104/api/Patient`;

  constructor(private http: HttpClient) {
    this.getAllPatients().subscribe((res) => (this.patients = res));
  }

  getPatient(patientId: string) {
    return fetch(this.patientApiUrl + patientId);
  }

  getAllPatients() {
    return this.http.get<IPatient[]>(this.patientApiUrl);
  }
}
