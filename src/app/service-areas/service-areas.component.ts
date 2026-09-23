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
    this.metaService.setPageMeta(
      'Service Areas | Tabeeb Home Healthcare Lahore',
      'Tabeeb home healthcare service areas in Lahore. Premium zones (2-3 hrs) and secondary areas (12-14 hrs).',
      ['service areas', 'Lahore coverage', 'home healthcare coverage']
    );

    this.premiumZones = this.contentService.getPremiumZones();
    this.secondaryZones = this.contentService.getSecondaryZones();
  }
}
