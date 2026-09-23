import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private metaService = inject(Meta);
  private titleService = inject(Title);

  setPageMeta(title: string, description: string, keywords?: string[]): void {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    
    if (keywords && keywords.length > 0) {
      this.metaService.updateTag({ name: 'keywords', content: keywords.join(', ') });
    }

    // Open Graph tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: window.location.href });
  }

  setCanonical(url: string): void {
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }

  setLocalBusinessSchema(name: string, phone: string, address: string): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': name,
      'telephone': phone,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'PK',
        'addressLocality': 'Lahore',
        'streetAddress': address
      },
      'sameAs': [
        'https://www.facebook.com/tabeebhomecare',
        'https://www.instagram.com/tabeebhomecare'
      ]
    };
    this.addJsonLd(schema);
  }

  setFAQSchema(faqs: Array<{question: string, answer: string}>): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
    this.addJsonLd(schema);
  }

  setServiceSchema(service: any): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.title,
      'description': service.fullDescription,
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Tabeeb Home Healthcare',
        'telephone': '+92 3248883803'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Lahore',
        'addressCountry': 'PK'
      },
      'priceRange': `PKR ${service.pricing.shift8hrs}-${service.pricing.shift24hrs}`
    };
    this.addJsonLd(schema);
  }

  setBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.name,
        'item': crumb.url
      }))
    };
    this.addJsonLd(schema);
  }

  setHomePageMeta(): void {
    this.setPageMeta(
      'Home Healthcare Lahore | Tabeeb - Hospital Care at Home',
      'Professional home healthcare in Lahore. Nurses, doctors, physiotherapy, lab tests - 24/7. 20% cheaper. 2-3 hour response. Book on WhatsApp.',
      [
        'home healthcare Lahore',
        'home nursing Lahore',
        'doctor at home',
        'ICU at home',
        'physiotherapy at home',
        'home healthcare services'
      ]
    );

    this.setCanonical('https://tabeebhomecare.com');
    this.setLocalBusinessSchema(
      'Tabeeb Home Healthcare',
      '+92 3248883803',
      'Lahore, Pakistan'
    );
  }

  resetMeta(): void {
    this.titleService.setTitle('Tabeeb');
    this.metaService.updateTag({ name: 'description', content: '' });
    this.metaService.updateTag({ name: 'keywords', content: '' });
  }

  private addJsonLd(schema: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
