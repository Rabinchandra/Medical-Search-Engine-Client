export interface IDoctor {
  doctor_id: number;
  name: string;
  specialty?: string;
  contact_number?: string;
  email?: string;
  availability?: string;
  profileImgUrl?: string;
  rating?: number;
}
