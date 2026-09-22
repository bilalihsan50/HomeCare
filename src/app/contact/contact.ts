import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink ,FooterComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  formData = signal({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  submitted = signal(false);

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
