import { Component } from '@angular/core';
import { VideoCallComponent } from '../../components/video-call/video-call.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [VideoCallComponent],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css',
})
export class MeetingComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.params.subscribe((p) => console.log(p)));
  }
}
