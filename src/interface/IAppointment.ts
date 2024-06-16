export interface IAppointment {
  appointmentId?: number; // Primary key
  doctorId?: string; // Foreign key to Doctor table
  patientId?: string; // Foreign key to Patient table
  appointmentDate: string;
  appointmentTime: string; // Represents time only portion
  status?: string; // Defaults to 'pending'
  purpose: string;
  notes?: string;
}
