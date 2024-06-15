import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import { UserService } from './services/user.service';
import { IUserRole } from '../interface/IUserRole';

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

      if (!user) {
        this.userService.currentUser = null;
        return;
      }

      // if user exists
      if (user.email == 'admin@gmail.com') {
        this.userService.currentUser = { ...user, role: 'admin' };
      } else {
        // Fetch the role of the current user
        // this.userService.getUserRole(user.uid).subscribe({
        //   next(value: IUserRole) {
        //     this.userService.currentUser = { ...user, role: value.role };
        //   },
        //   error(err) {
        //     console.log(err);
        //   },
        // });

        this.userService
          .getUserRole(user.uid)
          .subscribe(
            (result) =>
              (this.userService.currentUser = { ...user, role: result.role })
          );
      }

      console.log(this.userService.currentUser);
    });
  }
}
