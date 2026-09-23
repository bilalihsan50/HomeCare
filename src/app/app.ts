import { Component, signal, inject, DOCUMENT } from '@angular/core';
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
  private document = inject(DOCUMENT);

  constructor() {
    // Initialize Google Analytics 4
    this.initializeGA4();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage.set(event.url === '/' || event.url === '');
        // Track page views in GA4
        this.trackPageView(event.url);
      });

    // Set home page meta tags
    this.metaService.setHomePageMeta();
  }

  private initializeGA4(): void {
    const GA_ID = 'G-06L9RT2Y1D'; // GA4 Measurement ID for tabeebhomecare.com
    
    // Add GA4 script
    const script1 = this.document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    this.document.head.appendChild(script1);

    // Initialize gtag
    const script2 = this.document.createElement('script');
    script2.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        'page_path': window.location.pathname,
        'send_page_view': true,
        'anonymize_ip': true
      });
    `;
    this.document.head.appendChild(script2);
  }

  private trackPageView(path: string): void {
    // Track page view with custom path
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        'page_path': path,
        'page_title': document.title
      });
    }
  }
}
