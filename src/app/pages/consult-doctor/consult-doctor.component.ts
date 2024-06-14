import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-doctor',
  standalone: true,
  imports: [],
  templateUrl: './consult-doctor.component.html',
  styleUrl: './consult-doctor.component.css',
})
export class ConsultDoctorComponent {
  doctors: IDoctor[] = [
    {
      doctor_id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      contact_number: '+1234567890',
      email: 'johndoe@example.com',

      availability: 'Monday 9AM-5PM, Tuesday 10AM-6PM',
      profileImg:
        'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip',
      rating: 5,
    },
    {
      doctor_id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatology',
      contact_number: '+1987654321',
      email: 'janesmith@example.com',
      availability: 'Wednesday 8AM-4PM, Thursday 9AM-5PM',
      profileImg:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      rating: 5,
    },
    {
      doctor_id: 3,

      name: 'Dr. David Brown',
      specialty: 'Pediatrics',
      contact_number: '+1122334455',
      email: 'davidbrown@example.com',

      availability: 'Friday 10AM-6PM, Saturday 8AM-2PM',
      profileImg:
        'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=nr4XaWnRPQnWqwhzahajZhskIDG1yK9DmIteV5gpUOI=',
      rating: 5,
    },
    {
      doctor_id: 4,

      name: 'Dr. Sarah Lee',
      specialty: 'Obstetrics and Gynecology',
      contact_number: '+15556667777',
      email: 'sarahlee@example.com',

      availability: 'Monday 10AM-4PM, Wednesday 11AM-7PM',
      profileImg:
        'https://us.123rf.com/450wm/jackf/jackf2401/jackf240116525/223566665-smiling-female-doctor-in-white-uniform-standing-with-notebooks.jpg?ver=6',
      rating: 5,
    },
    {
      doctor_id: 5,

      name: 'Dr. Michael Johnson',
      specialty: 'Orthopedics',
      contact_number: '+14443332222',
      email: 'michaeljohnson@example.com',

      availability: 'Tuesday 9AM-3PM, Thursday 10AM-4PM',
      profileImg:
        'https://img.freepik.com/free-photo/attractive-medical-professional-uniform-standing-with-arms-crossed-against-isolated-background_662251-416.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717977600&semt=ais_user',
      rating: 5,
    },
  ];

  constructor(private router: Router) {}

  goToBooking() {
    this.router.navigate(['/booking'], {
      queryParams: {
        id: 123,
      },
    });
  }
}
