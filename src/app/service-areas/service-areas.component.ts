import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../core/services/content.service';
import { MetaService } from '../core/services/meta.service';
import { ServiceArea } from '../models/service-area.model';

@Component({
  selector: 'app-service-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-areas.component.html',
  styleUrls: ['./service-areas.component.css']
})
export class ServiceAreasComponent implements OnInit {
  premiumZones = signal<ServiceArea[]>([]);
  secondaryZones = signal<ServiceArea[]>([]);
  allZones = signal<ServiceArea[]>([]);
  expandedZone = signal<string | null>(null);

  private contentService = inject(ContentService);
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.premiumZones.set(this.contentService.getPremiumZones());
    this.secondaryZones.set(this.contentService.getSecondaryZones());
    this.allZones.set([...this.premiumZones(), ...this.secondaryZones()]);

    // Set enhanced meta tags for SEO
    this.metaService.setServiceAreasPageMeta();
    this.metaService.setCanonical('https://www.tabeebhomecare.com/service-areas');
    
    // Add schema markup for all zones
    this.addZoneSchemaMarkup();
  }

  toggleZoneDetails(zoneId: string): void {
    this.expandedZone.set(
      this.expandedZone() === zoneId ? null : zoneId
    );
  }

  private addZoneSchemaMarkup(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Tabeeb Home Healthcare - Service Areas in Lahore',
      'areaServed': this.allZones().map(zone => ({
        '@type': 'City',
        'name': zone.name
      })),
      'serviceArea': {
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lahore',
          'addressRegion': 'Punjab',
          'addressCountry': 'PK'
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
