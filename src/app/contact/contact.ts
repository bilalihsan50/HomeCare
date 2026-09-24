import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer';
import { RouterLink } from '@angular/router';
import { MetaService } from '../core/services/meta.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink ,FooterComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
  formData = signal({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  submitted = signal(false);
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Contact Us | Home Nursing & Healthcare Lahore | Tabeeb',
      'Get in touch with Tabeeb Home Healthcare. Phone: +92 323-888-3803, Email: connect@tabeebhomecare.com. Available 24/7 for inquiries about home nursing and healthcare services in Lahore.',
      ['contact us', 'home healthcare lahore', 'nursing services', 'phone', 'email', 'inquiry']
    );
    this.metaService.setCanonical('https://www.tabeebhomecare.com/contact');
  }

  onSubmit() {
    console.log('Form submitted:', this.formData());
    this.submitted.set(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.formData.set({ name: '', email: '', phone: '', message: '' });
      this.submitted.set(false);
    }, 3000);
  }
}
