export interface IAppointmentDetails {
  appointmentId?: number;
  doctorId?: string;
  patientId?: string;
  doctorName: string;
  patientName: string;
  patientImgUrl: string;
  patientContact: string;
  status: string;
  appointmentDate?: string;
  appointmentTime?: string;
  purpose?: string;
  notes?: string;
  meetingUrl?: string;
}
