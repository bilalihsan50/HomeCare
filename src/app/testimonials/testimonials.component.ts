import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../core/services/content.service';
import { MetaService } from '../core/services/meta.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [];

  private contentService = inject(ContentService);
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.testimonials = this.contentService.getAllTestimonials();

    // Set enhanced meta tags
    this.metaService.setTestimonialsPageMeta();
    this.metaService.setCanonical('https://www.tabeebhomecare.com/testimonials');
    this.metaService.setAggregateRatingSchema(4.8, this.testimonials.length);
  }

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(1);
  }
}
