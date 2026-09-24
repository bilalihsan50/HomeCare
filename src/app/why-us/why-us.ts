import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer";
import { RouterLink } from '@angular/router';
import { MetaService } from '../core/services/meta.service';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, RouterLink ,FooterComponent],
  templateUrl: './why-us.html',
  styleUrl: './why-us.css',
})
export class WhyUsComponent implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Why Choose Tabeeb | Best Home Healthcare Provider in Lahore',
      'Discover why families trust Tabeeb: certified professionals, 24/7 availability, transparent pricing, 20% cheaper than market rates. Lahore\'s most trusted home healthcare provider.',
      ['why tabeeb', 'home healthcare provider', 'certified nurses', 'affordable care', 'trusted healthcare', 'professional services']
    );
    this.metaService.setCanonical('https://www.tabeebhomecare.com/why-us');
  }
  features: Feature[] = [
    {
      icon: '⭐',
      title: 'Certified & Experienced',
      description: 'Highly trained and certified healthcare professionals with years of experience in patient care.',
    },
    {
      icon: '🕐',
      title: '24/7 Availability',
      description: 'Round-the-clock availability for emergency support and regular care whenever you need it.',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'Clear, affordable pricing with no hidden charges. Save up to 25% compared to traditional care.',
    },
    {
      icon: '❤️',
      title: 'Compassionate Care',
      description: 'Personalized attention with genuine care and respect for patient dignity and comfort.',
    },
  ];
}
