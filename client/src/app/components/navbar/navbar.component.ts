import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/models/navbar-item.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;

  unauthenticatedNavbarItems: NavbarItem[];
  authenticatedNavbarItems: NavbarItem[];

  constructor(private authService: AuthService) {
    this.unauthenticatedNavbarItems = [
      { label: 'Home', route: 'home' },
      { label: 'About', route: 'about'  },
      { label: 'Contact', route: 'contact' },
      { label: 'Sign In', route: 'sign-in'  },
      { label: 'Sign Up', route: 'sign-up' }
    ]

    this.authenticatedNavbarItems = [
      { label: 'Profile', route: 'profile' },
      { label: 'Sign out', action: 'signOut' }
    ]

    this.isAuthenticated = this.authService.isUserAuthenticated();
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.setUserAuthentication(false);
  }

}
