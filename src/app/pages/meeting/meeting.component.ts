import { Component } from '@angular/core';
import { VideoCallComponent } from '../../components/video-call/video-call.component';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [VideoCallComponent],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css',
})
export class MeetingComponent {}
