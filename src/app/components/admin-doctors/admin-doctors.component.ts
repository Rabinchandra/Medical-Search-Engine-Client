import { Component } from '@angular/core';
import { IDoctor } from '../../../interface/IDoctor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-doctors',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-doctors.component.html',
  styleUrl: './admin-doctors.component.css',
})
export class AdminDoctorsComponent {
  doctors: IDoctor[] = [
    {
      doctorId: '1',
      name: 'Dr. John Doe',
      speciality: 'Cardiology',
      contactNumber: '+1234567890',
      email: 'johndoe@example.com',
      availability: 1,
      profileImgUrl:
        'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip',
      rating: 5,
    },
    {
      doctorId: '2',
      name: 'Dr. Jane Smith',
      speciality: 'Dermatology',
      contactNumber: '+1987654321',
      email: 'janesmith@example.com',
      availability: 1,
      profileImgUrl:
        'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=',
      rating: 5,
    },
    {
      doctorId: '3',

      name: 'Dr. David Brown',
      speciality: 'Pediatrics',
      contactNumber: '+1122334455',
      email: 'davidbrown@example.com',

      availability: 1,
      profileImgUrl:
        'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=nr4XaWnRPQnWqwhzahajZhskIDG1yK9DmIteV5gpUOI=',
      rating: 5,
    },
    {
      doctorId: '4',
      name: 'Dr. Sarah Lee',
      speciality: 'Obstetrics and Gynecology',
      contactNumber: '+15556667777',
      email: 'sarahlee@example.com',

      availability: 1,
      profileImgUrl:
        'https://us.123rf.com/450wm/jackf/jackf2401/jackf240116525/223566665-smiling-female-doctor-in-white-uniform-standing-with-notebooks.jpg?ver=6',
      rating: 5,
    },
    {
      doctorId: '5',
      name: 'Dr. Michael Johnson',
      speciality: 'Orthopedics',
      contactNumber: '+14443332222',
      email: 'michaeljohnson@example.com',
      availability: 0,
      profileImgUrl:
        'https://img.freepik.com/free-photo/attractive-medical-professional-uniform-standing-with-arms-crossed-against-isolated-background_662251-416.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717977600&semt=ais_user',
      rating: 5,
    },
  ];
}
