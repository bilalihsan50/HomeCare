import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../core/services/content.service';
import { MetaService } from '../core/services/meta.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  categories: string[] = [];
  faqsByCategory: { [key: string]: any[] } = {};
  expandedFaq = signal<string | null>(null);

  private contentService = inject(ContentService);
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'FAQs | Tabeeb Home Healthcare Lahore',
      'Frequently asked questions about Tabeeb home healthcare services in Lahore. Learn about booking, pricing, and medical care.',
      ['faq', 'home healthcare Lahore', 'tabeeb services']
    );

    this.categories = this.contentService.getFAQCategories();
    this.categories.forEach(category => {
      this.faqsByCategory[category] = this.contentService.getFAQsByCategory(category);
    });
  }

  toggleFaq(id: string): void {
    this.expandedFaq.set(this.expandedFaq() === id ? null : id);
  }
}
