export interface IAppointmentDetails {
  appointmentId?: string;
  doctorId?: string;
  patientId?: string;
  doctorName: string;
  patientName: string;
  patientImgUrl: string;
  patientContact: string;
  status: string;
  appointmentDate?: string;
  appointmentTime?: string;
}
