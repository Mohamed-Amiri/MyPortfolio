import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navItems = [
    { label: 'HOME', route: '/home' },
    { label: 'ABOUT', route: '/about' },
    { label: 'SERVICE', route: '/service' },
    { label: 'PORTFOLIO', route: '/project' },
    { label: 'RESUME', route: '/cv' },
    { label: 'BLOG', route: '/blog' },
    { label: 'CONTACT', route: '/contact' }
  ];
}
