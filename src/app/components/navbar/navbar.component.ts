import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private userService: UserService, private router: Router) {}

  get currentUser() {
    return this.userService.currentUser;
  }

  onLogout() {
    this.userService.logout();
    // Redirect to home page
    this.router.navigateByUrl('/');
  }
}
