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
    this.metaService.setPageMeta(
      'Patient Testimonials | Tabeeb Home Healthcare',
      'Read real patient testimonials about Tabeeb home healthcare services in Lahore.',
      ['testimonials', 'patient reviews', 'home healthcare reviews']
    );

    this.testimonials = this.contentService.getAllTestimonials();
  }

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(1);
  }
}
