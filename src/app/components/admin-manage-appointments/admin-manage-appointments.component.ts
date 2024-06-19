import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { PatientService } from '../../services/patient.service';
import { IAppointmentDetails } from '../../../interface/IAppointmentDetails';
import { VoiceCallService } from '../../services/voice-call.service';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

interface IAppointmentWithCallStatus extends IAppointmentDetails {
  callStatus?: string;
}

@Component({
  selector: 'app-admin-manage-appointments',
  standalone: true,
  imports: [],
  templateUrl: './admin-manage-appointments.component.html',
  styleUrl: './admin-manage-appointments.component.css',
})
export class AdminManageAppointmentsComponent {
  appointments: IAppointmentWithCallStatus[] = [];
  pendingAppointments: IAppointmentWithCallStatus[] = [];
  acceptedAppointments: IAppointmentWithCallStatus[] = [];

  isLoading = true;

  constructor(
    private appointmentService: AppointmentService,
    private voiceCallService: VoiceCallService
  ) {}

  ngOnInit() {
    this.appointmentService.getAllAppointmentsDetails().subscribe((result) => {
      this.appointments = result;
      this.acceptedAppointments = result.filter((a) => a.status == 'accepted');
      this.pendingAppointments = result.filter((a) => a.status == 'pending');

      this.isLoading = false;
    });
  }

  currentTab = 'pending';

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

  makeAudioCall(currentAppointment: IAppointmentWithCallStatus) {
    console.log('calling...');
    const currentAppointmentIndex =
      this.pendingAppointments.indexOf(currentAppointment);

    // Change the call status of the appointment to call started - to reflect in tne UI
    this.pendingAppointments[currentAppointmentIndex].callStatus = 'started';

    const phoneNumber = '+916009383347';

    this.voiceCallService
      .makeCall(phoneNumber)
      .then((res) =>
        // Update the call status
        setTimeout(() => {
          this.pendingAppointments[currentAppointmentIndex].callStatus =
            'call made';
          Swal.fire({
            icon: 'success',
            text: 'Call made successfully ',
          });
        }, 6000)
      )
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while trying to make: ' + err,
        });
      });
  }

  // Method to accept an appointment
  acceptAppointment(app: IAppointmentWithCallStatus) {
    Swal.fire({
      title: 'Are you sure you want to accept the appointment?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4caf50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Accept it',
    }).then((result) => {
      if (result.isConfirmed) {
        if (app.appointmentId) {
          const currentAppointmentIndex = this.pendingAppointments.indexOf(app);

          this.appointmentService
            .acceptAppointment(app.appointmentId)
            .pipe(
              catchError((error) => {
                // Handle error here (e.g., log it, show an error message)
                console.error('Error accepting appointment:', error);
                // Optionally, throw a new error to propagate it further
                // throw new Error('Appointment acceptance failed');
                return throwError('Appointment acceptance failed');
              })
            )
            .subscribe(
              (res) => {
                // Update the status to reflect in the UI
                this.pendingAppointments[currentAppointmentIndex].status =
                  'accepted';

                Swal.fire({
                  icon: 'success',
                  title: 'Appointment Successfully Accepted!',
                  text: 'A Message has also been sent to the patient on WhatsApp to inform about the approval!',
                });
              },
              (error) => {
                // Handle specific error cases if needed
                console.log(error);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Failed to accept appointment. Please try again later',
                });
              }
            );
        }
      }
    });
  }

  rejectAppointment() {
    const messageBody = `
      We're really sorry to inform you that your appointment has been rejected :(
    `;
  }
}
