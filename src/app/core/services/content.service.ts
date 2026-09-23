import { Injectable, signal, computed } from '@angular/core';
import { TABEEB_SERVICES, Service } from '../../models/service.model';
import { TABEEB_TESTIMONIALS, Testimonial } from '../../models/testimonial.model';
import { TABEEB_FAQS, FAQ, FAQ_CATEGORIES } from '../../models/faq.model';
import { TABEEB_SERVICE_AREAS, ServiceArea, getPremiumZones, getSecondaryZones } from '../../models/service-area.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private allServices = signal<Service[]>(TABEEB_SERVICES);
  private allTestimonials = signal<Testimonial[]>(TABEEB_TESTIMONIALS);
  private allFAQs = signal<FAQ[]>(TABEEB_FAQS);
  private allServiceAreas = signal<ServiceArea[]>(TABEEB_SERVICE_AREAS);

  // Computed signals for common queries
  readonly serviceCount = computed(() => this.allServices().length);
  readonly testimonialCount = computed(() => this.allTestimonials().length);
  readonly faqCount = computed(() => this.allFAQs().length);

  constructor() {}

  // SERVICE METHODS
  getAllServices(): Service[] {
    return this.allServices();
  }

  getServiceBySlug(slug: string): Service | undefined {
    return this.allServices().find(service => service.slug === slug);
  }

  getRelatedServices(currentSlug: string, limit: number = 3): Service[] {
    const current = this.getServiceBySlug(currentSlug);
    if (!current || !current.relatedServices) return [];
    
    return this.allServices()
      .filter(s => current.relatedServices!.includes(s.slug))
      .slice(0, limit);
  }

  // TESTIMONIAL METHODS
  getAllTestimonials(): Testimonial[] {
    return this.allTestimonials();
  }

  getTestimonialsByService(serviceSlug: string): Testimonial[] {
    return this.allTestimonials().filter(t => t.serviceSlug === serviceSlug);
  }

  getFeaturedTestimonials(limit: number = 4): Testimonial[] {
    return this.allTestimonials()
      .filter(t => t.rating === 5)
      .slice(0, limit);
  }

  // FAQ METHODS
  getAllFAQs(): FAQ[] {
    return this.allFAQs();
  }

  getFAQsByCategory(category: string): FAQ[] {
    return this.allFAQs()
      .filter(faq => faq.category === category)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  getFAQCategories(): string[] {
    return FAQ_CATEGORIES;
  }

  // SERVICE AREA METHODS
  getAllServiceAreas(): ServiceArea[] {
    return this.allServiceAreas();
  }

  getPremiumZones(): ServiceArea[] {
    return getPremiumZones();
  }

  getSecondaryZones(): ServiceArea[] {
    return getSecondaryZones();
  }

  getAreaByName(name: string): ServiceArea | undefined {
    return this.allServiceAreas().find(area => 
      area.name.toLowerCase() === name.toLowerCase()
    );
  }

  // SEARCH METHODS
  searchServices(query: string): Service[] {
    const q = query.toLowerCase();
    return this.allServices().filter(service =>
      service.title.toLowerCase().includes(q) ||
      service.shortDescription.toLowerCase().includes(q) ||
      service.seoKeywords.some(k => k.toLowerCase().includes(q))
    );
  }

  searchFAQs(query: string): FAQ[] {
    const q = query.toLowerCase();
    return this.allFAQs().filter(faq =>
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q)
    );
  }

  // SEO METHODS
  getServiceMetaTitle(slug: string): string {
    const service = this.getServiceBySlug(slug);
    return service?.metaTitle || 'Tabeeb Home Healthcare - Lahore';
  }

  getServiceMetaDescription(slug: string): string {
    const service = this.getServiceBySlug(slug);
    return service?.metaDescription || 'Professional home healthcare services in Lahore. Nurses, doctors, physiotherapy, lab tests - 24/7.';
  }

  getServiceSeoKeywords(slug: string): string[] {
    const service = this.getServiceBySlug(slug);
    return service?.seoKeywords || [];
  }

  // STATIC DATA
  getWhatsAppNumber(): string {
    return '+92 3248883803';
  }

  getPhoneNumber(): string {
    return '+92 3248883803';
  }

  getAboutText(): string {
    return `Tabeeb is Lahore's leading home healthcare provider. For 3 years offline and 1 year online, we've served 
    hundreds of families with 90-110+ trained staff (nurses, doctors, physiotherapists, lab technicians). Available 24/7, 
    20% cheaper than market rates, with 2-3 hour response in premium zones and 12-14 hours elsewhere across all Lahore.`;
  }

  getCompanyDescription(): string {
    return `Tabeeb brings hospital-quality care to your home in Lahore. Professional nurses, licensed doctors, 
    physiotherapists, lab technicians, and home pharmacy - all available 24/7 at 20% below market rates.`;
  }
}
