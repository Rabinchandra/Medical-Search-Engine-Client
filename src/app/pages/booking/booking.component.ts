import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  constructor(private route: ActivatedRoute) {}

  id: number = 0;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
