import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { PatientService } from '../../services/patient.service';
import { IAppointmentDetails } from '../../../interface/IAppointmentDetails';
import { VoiceCallService } from '../../services/voice-call.service';

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

  constructor(
    private appointmentService: AppointmentService,
    private voiceCallService: VoiceCallService
  ) {}

  ngOnInit() {
    this.appointmentService.getAllAppointmentsDetails().subscribe((result) => {
      this.appointments = result;
    });
  }

  currentTab = 'pending';

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

  makeAudioCall(currentAppointment: IAppointmentWithCallStatus) {
    console.log('calling...');
    const currentAppointmentIndex =
      this.appointments.indexOf(currentAppointment);

    // Change the call status of the appointment to call started
    this.appointments[currentAppointmentIndex].callStatus = 'started';

    const phoneNumber = '+916009383347';

    this.voiceCallService.makeCall(phoneNumber).then((res) =>
      // Update the call status
      setTimeout(
        () =>
          (this.appointments[currentAppointmentIndex].callStatus = 'call made'),
        6000
      )
    );
  }

  // Method to accept an appointment
  acceptAppointment(app: IAppointmentWithCallStatus) {
    
  }
}
