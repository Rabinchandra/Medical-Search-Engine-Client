export interface IAppointment {
  appointment_id: number; // Primary key
  doctor_id: number; // Foreign key to Doctor table
  patient_id: number; // Foreign key to Patient table
  appointment_date: Date;
  appointment_time: Date; // Represents time only portion
  status: string; // Defaults to 'pending'
  purpose: string;
  notes: string;
}
