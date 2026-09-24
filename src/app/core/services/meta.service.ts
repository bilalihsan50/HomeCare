import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private metaService = inject(Meta);
  private titleService = inject(Title);

  setPageMeta(title: string, description: string, keywords?: string[], imageUrl?: string): void {
    // Page Title
    this.titleService.setTitle(title);
    
    // Meta Description (FIX FOR GOOGLE SERP)
    this.metaService.updateTag({ name: 'description', content: description });
    
    // Keywords
    if (keywords && keywords.length > 0) {
      this.metaService.updateTag({ name: 'keywords', content: keywords.join(', ') });
    }

    // Language & Charset
    this.metaService.updateTag({ httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' });
    this.metaService.updateTag({ name: 'language', content: 'English' });
    this.metaService.updateTag({ httpEquiv: 'content-language', content: 'en-US' });

    // Robots
    this.metaService.updateTag({ name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' });

    // Author
    this.metaService.updateTag({ name: 'author', content: 'Tabeeb Home Healthcare' });
    
    // Viewport (mobile)
    this.metaService.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' });

    // Theme Color
    this.metaService.updateTag({ name: 'theme-color', content: '#0ba696' });

    // Open Graph tags (Social Media)
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: window.location.href });
    this.metaService.updateTag({ property: 'og:site_name', content: 'Tabeeb Home Healthcare' });
    if (imageUrl) {
      this.metaService.updateTag({ property: 'og:image', content: imageUrl });
      this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
      this.metaService.updateTag({ property: 'og:image:height', content: '630' });
    }

    // Twitter Card tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    if (imageUrl) {
      this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
    }
    this.metaService.updateTag({ name: 'twitter:creator', content: '@tabeebhomecare' });

    // WhatsApp Meta
    this.metaService.updateTag({ property: 'og:phone_number', content: '+92 324-888-3803' });
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

  setOrganizationSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Tabeeb Home Healthcare',
      'url': 'https://www.tabeebhomecare.com',
      'telephone': '+92 324-888-3803',
      'email': 'connect@tabeebhomecare.com',
      'foundingDate': '2023',
      'areaServed': {
        '@type': 'City',
        'name': 'Lahore',
        'addressCountry': 'PK'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Service',
        'telephone': '+92 324-888-3803',
        'availableLanguage': ['en', 'ur']
      },
      'sameAs': [
        'https://www.facebook.com/tabeebhomecare',
        'https://www.instagram.com/tabeebhomecare',
        'https://wa.me/923238883803'
      ]
    };
    this.addJsonLd(schema);
  }

  setLocalBusinessSchema(name: string, phone: string, address: string, hours?: string): void {
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.tabeebhomecare.com',
      'name': name,
      'telephone': phone,
      'url': 'https://www.tabeebhomecare.com',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'PK',
        'addressLocality': 'Lahore',
        'streetAddress': address
      },
      'sameAs': [
        'https://www.facebook.com/tabeebhomecare',
        'https://www.instagram.com/tabeebhomecare',
        'https://wa.me/923238883803'
      ],
      'priceRange': 'PKR 1500-10000'
    };

    if (hours) {
      schema['openingHoursSpecification'] = {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      };
    }

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
        'telephone': '+92 324-888-3803',
        'url': 'https://www.tabeebhomecare.com'
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Lahore',
        'addressCountry': 'PK'
      },
      'serviceType': service.category || 'Healthcare',
      'image': window.location.origin + '/assets/images/service-default.jpg',
      'url': window.location.href
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

  setAggregateRatingSchema(ratingValue: number = 4.8, reviewCount: number = 7): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': ratingValue,
        'reviewCount': reviewCount
      }
    };
    this.addJsonLd(schema);
  }

  setHomePageMeta(): void {
    this.setPageMeta(
      'Professional Home Nursing Care in Lahore | 20% Cheaper | Tabeeb',
      'Best home healthcare services in Lahore. Professional nurses, doctors, ICU care, physiotherapy available 24/7. Response in 12-14 hours. 20% cheaper than market. Book WhatsApp +92 324-888-3803',
      [
        'home nursing lahore',
        'home healthcare lahore',
        'nurse at home lahore',
        'ICU care at home lahore',
        'doctor visit at home lahore',
        'physiotherapy at home lahore',
        'elderly care lahore',
        'post surgery recovery care lahore',
        'home healthcare services pakistan'
      ]
    );

    this.setCanonical('https://www.tabeebhomecare.com');
    this.setOrganizationSchema();
    this.setLocalBusinessSchema(
      'Tabeeb Home Healthcare',
      '+92 324-888-3803',
      'Lahore, Pakistan',
      '24/7'
    );
    this.setAggregateRatingSchema(4.8, 7);
  }

  setServicePageMeta(serviceTitle: string, serviceDescription: string): void {
    this.setPageMeta(
      `${serviceTitle} in Lahore | Professional Care | Tabeeb`,
      serviceDescription,
      [serviceTitle.toLowerCase(), 'lahore', 'healthcare', 'professional care'],
      window.location.origin + '/assets/images/service-default.jpg'
    );
    this.setCanonical(window.location.href);
    this.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.tabeebhomecare.com' },
      { name: 'Services', url: 'https://www.tabeebhomecare.com/services' },
      { name: serviceTitle, url: window.location.href }
    ]);
  }

  setFAQPageMeta(): void {
    this.setPageMeta(
      'Frequently Asked Questions | Home Healthcare Lahore | Tabeeb',
      'Common questions about home nursing, healthcare services, pricing, and qualifications in Lahore. Get answers from healthcare experts.',
      ['FAQ', 'home healthcare', 'nursing', 'lahore', 'questions answers']
    );
    this.setCanonical('https://www.tabeebhomecare.com/faq');
  }

  setTestimonialsPageMeta(): void {
    this.setPageMeta(
      'Patient Testimonials | Home Healthcare Reviews | Tabeeb Lahore',
      'Real patient testimonials and reviews about our home nursing and healthcare services in Lahore. See why families trust us.',
      ['testimonials', 'reviews', 'patient stories', 'home healthcare', 'lahore']
    );
    this.setCanonical('https://www.tabeebhomecare.com/testimonials');
  }

  setServiceAreasPageMeta(): void {
    this.setPageMeta(
      'Service Areas in Lahore | Coverage Zones | Tabeeb Home Healthcare',
      'We serve all of Lahore including premium zones (DHA, Gulberg, Model Town, Defence, Cantt) and secondary areas. 24/7 service available.',
      ['service areas', 'lahore zones', 'DHA', 'Gulberg', 'coverage area', 'home care delivery']
    );
    this.setCanonical('https://www.tabeebhomecare.com/service-areas');
  }

  setPrivacyPageMeta(): void {
    this.setPageMeta(
      'Privacy Policy | Tabeeb Home Healthcare',
      'Our privacy policy explains how we collect, use, and protect your personal health information.',
      ['privacy policy', 'data protection', 'confidentiality']
    );
    this.setCanonical('https://www.tabeebhomecare.com/privacy');
  }

  resetMeta(): void {
    this.titleService.setTitle('Tabeeb Home Healthcare');
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
