import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { MetaService } from '../core/services/meta.service';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Our Services | Professional Home Healthcare | Tabeeb',
      'Professional healthcare services in Lahore: doctor at home, ICU care, nursing, lab tests, injections, physiotherapy, and mother & baby care. Available 24/7.',
      ['home healthcare services', 'doctor at home', 'ICU care', 'nursing lahore', 'physiotherapy', 'lab tests', 'medical services', 'home care']
    );
    this.metaService.setCanonical('https://www.tabeebhomecare.com/services');
  }
  services: Service[] = [
    {
      id: 1,
      icon: '👨‍⚕️',
      title: 'Doctor at Home',
      description: 'Experienced doctors visit your home for consultations, check-ups, and medical advice.',
      color: '#0099ff',
    },
    {
      id: 2,
      icon: '🏥',
      title: 'Home ICU Care',
      description: 'Advanced ICU-level care at home with continuous monitoring and professional support.',
      color: '#00cc88',
    },
    {
      id: 3,
      icon: '💉',
      title: 'Injection Services',
      description: 'Safe and sterile injection services administered by certified nurses at your home.',
      color: '#ff6b35',
    },
    {
      id: 4,
      icon: '🧬',
      title: 'Lab Services',
      description: 'Home lab tests and blood collection with quick results and accurate diagnosis.',
      color: '#0099ff',
    },
    {
      id: 5,
      icon: '🩺',
      title: 'Nursing Care',
      description: 'Skilled nursing care for post-surgery recovery, elderly care, and chronic conditions.',
      color: '#00cc88',
    },
    {
      id: 6,
      icon: '👶',
      title: 'Mother & Baby Care',
      description: 'Specialized care for new mothers and babies with expert guidance and support.',
      color: '#ff6b35',
    },
  ];
}
