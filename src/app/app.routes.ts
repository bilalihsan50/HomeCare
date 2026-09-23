import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact';
import { BlogComponent } from './blog/blog';
import { ServicesComponent } from './services/services';
import { WhyUsComponent } from './why-us/why-us';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { FAQComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServiceAreasComponent } from './service-areas/service-areas.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: ServicesComponent, data: { title: 'Home' } },
  { path: 'service/:slug', component: ServiceDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'service-areas', component: ServiceAreasComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '/' },
];
