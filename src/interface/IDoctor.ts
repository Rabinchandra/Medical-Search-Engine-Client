export interface IDoctor {
  doctor_id: number;
  user_id: string;
  name: string;
  specialty?: string;
  contact_number?: string;
  email?: string;
  clinic_address?: string;
  availability?: string;
  profileImg?: string;
  rating?: number;
}
