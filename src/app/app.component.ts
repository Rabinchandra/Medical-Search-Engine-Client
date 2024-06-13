import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'medical-search-engine-client';

  constructor(private userService: UserService) {}

  ngOnInit() {
    onAuthStateChanged(auth, (user) => {
      console.log(user?.displayName);
      if (user) {
        // Change the logic letter
        if (user.displayName == 'admin') {
          this.userService.currentUser = { ...user, role: 'admin' };
        } else {
          this.userService.currentUser = { ...user, role: 'patient' };
        }

        console.log(this.userService.currentUser);
      } else {
        // if logout
        this.userService.currentUser = null;
      }
    });
  }
}
