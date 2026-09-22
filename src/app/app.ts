import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';
import { ServicesComponent } from './services/services';
import { WhyUsComponent } from './why-us/why-us';
import { FooterComponent } from './footer/footer';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    WhyUsComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('Tabeeb Home Care');
  isHomePage = signal(true);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage.set(event.url === '/' || event.url === '');
      });
  }
}
