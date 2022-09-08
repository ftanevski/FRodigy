import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/models/navbar-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  navbarItems: NavbarItem[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about'  },
    { label: 'Contact', route: 'contact' },
    { label: 'Sign In', route: 'sign-in'  },
    { label: 'Sign Up', route: 'sign-up' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
