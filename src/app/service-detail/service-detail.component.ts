import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentService } from '../core/services/content.service';
import { MetaService } from '../core/services/meta.service';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;
  relatedServices: Service[] = [];
  testimonials: any[] = [];

  private route = inject(ActivatedRoute);
  private contentService = inject(ContentService);
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadService(slug);
    });
  }

  private loadService(slug: string): void {
    this.service = this.contentService.getServiceBySlug(slug);
    
    if (this.service) {
      // Set meta tags
      this.metaService.setPageMeta(
        this.service.metaTitle,
        this.service.metaDescription,
        this.service.seoKeywords
      );

      // Load related services
      this.relatedServices = this.contentService.getRelatedServices(slug, 3);

      // Load testimonials for this service
      this.testimonials = this.contentService.getTestimonialsByService(slug);

      // Set breadcrumb
      this.metaService.setBreadcrumbSchema([
        { name: 'Home', url: 'https://tabeebhomecare.com' },
        { name: 'Services', url: 'https://tabeebhomecare.com/services' },
        { name: this.service.title, url: `https://tabeebhomecare.com/service/${slug}` }
      ]);

      // Set service schema
      this.metaService.setServiceSchema(this.service);
    }
  }

  getWhatsAppLink(): string {
    const text = `I'm interested in ${this.service?.title}. Can you provide more info?`;
    const encoded = encodeURIComponent(text);
    return `https://wa.me/923238883803?text=${encoded}`;
  }
}
