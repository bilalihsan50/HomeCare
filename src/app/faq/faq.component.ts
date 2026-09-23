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
    this.categories = this.contentService.getFAQCategories();
    this.categories.forEach(category => {
      this.faqsByCategory[category] = this.contentService.getFAQsByCategory(category);
    });

    // Set meta tags with enhanced SEO
    this.metaService.setFAQPageMeta();
    this.metaService.setCanonical('https://www.tabeebhomecare.com/faq');

    // Set FAQ structured data
    const allFaqs = Object.values(this.faqsByCategory).flat().slice(0, 10);
    const faqSchema = allFaqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));
    this.metaService.setFAQSchema(faqSchema);
  }

  toggleFaq(id: string): void {
    this.expandedFaq.set(this.expandedFaq() === id ? null : id);
  }
}
