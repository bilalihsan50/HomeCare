import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact';
import { BlogComponent } from './blog/blog';
import { ServicesComponent } from './services/services';
import { WhyUsComponent } from './why-us/why-us';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: '**', redirectTo: '/' },
];
