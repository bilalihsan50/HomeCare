import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './navbar/navbar';
import { HeroComponent } from './hero/hero';
import { ServicesComponent } from './services/services';
import { WhyUsComponent } from './why-us/why-us';
import { FooterComponent } from './footer/footer';
import { ContentService } from './core/services/content.service';
import { MetaService } from './core/services/meta.service';

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
  providers: [ContentService, MetaService]
})
export class App {
  title = signal('Tabeeb Home Care');
  isHomePage = signal(true);

  private router = inject(Router);
  private contentService = inject(ContentService);
  private metaService = inject(MetaService);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage.set(event.url === '/' || event.url === '');
      });

    // Set home page meta tags
    this.metaService.setHomePageMeta();
  }
}
