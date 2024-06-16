import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patientApiUrl = `https://localhost:7104/patient`;

  constructor() {}

  getPatient(patientId: string) {
    return fetch(this.patientApiUrl + patientId);
  }
}
