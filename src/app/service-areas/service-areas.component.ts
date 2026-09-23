import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../core/services/content.service';
import { MetaService } from '../core/services/meta.service';

@Component({
  selector: 'app-service-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-areas.component.html',
  styleUrls: ['./service-areas.component.css']
})
export class ServiceAreasComponent implements OnInit {
  premiumZones: any[] = [];
  secondaryZones: any[] = [];

  private contentService = inject(ContentService);
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.premiumZones = this.contentService.getPremiumZones();
    this.secondaryZones = this.contentService.getSecondaryZones();

    // Set enhanced meta tags
    this.metaService.setServiceAreasPageMeta();
    this.metaService.setCanonical('https://www.tabeebhomecare.com/service-areas');
  }
}
