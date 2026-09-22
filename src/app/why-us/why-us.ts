import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer";
import { RouterLink } from '@angular/router';

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
export class WhyUsComponent {
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
