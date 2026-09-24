import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer';
import { MetaService } from '../core/services/meta.service';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class BlogComponent implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setPageMeta(
      'Healthcare Blog | Nursing Tips & Wellness Articles | Tabeeb',
      'Read expert articles on home nursing, healthcare tips, senior care, and wellness. Get professional advice from Tabeeb Home Healthcare specialists in Lahore.',
      ['healthcare blog', 'nursing tips', 'health articles', 'wellness', 'home care', 'senior care']
    );
    this.metaService.setCanonical('https://www.tabeebhomecare.com/blog');
    this.metaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.tabeebhomecare.com' },
      { name: 'Blog', url: 'https://www.tabeebhomecare.com/blog' }
    ]);
  }
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Importance of Home Care in Recovery',
      date: 'September 1, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Health Tips',
      excerpt: 'Discover why home care plays a crucial role in patient recovery and well-being.',
      image: '🏥',
      content: 'Home care provides personalized attention and a comfortable environment for recovery...',
    },
    {
      id: 2,
      title: 'Nutrition Tips for Senior Health',
      date: 'August 28, 2024',
      author: 'Nutritionist Mike Chen',
      category: 'Nutrition',
      excerpt: 'Essential nutrition guidelines to maintain optimal health in your golden years.',
      image: '🥗',
      content: 'Proper nutrition is vital for seniors. We recommend a balanced diet rich in vitamins...',
    },
    {
      id: 3,
      title: 'Managing Chronic Conditions at Home',
      date: 'August 25, 2024',
      author: 'Nurse Patricia Lee',
      category: 'Medical Care',
      excerpt: 'Learn effective strategies for managing chronic illnesses with professional home care support.',
      image: '💊',
      content: 'Managing chronic conditions requires proper planning and regular monitoring...',
    },
    {
      id: 4,
      title: 'Mobility Aids and Assistive Devices',
      date: 'August 20, 2024',
      author: 'Dr. Robert Wilson',
      category: 'Mobility',
      excerpt: 'Explore modern mobility aids that enhance independence and safety at home.',
      image: '🦽',
      content: 'Modern assistive devices can significantly improve quality of life and independence...',
    },
    {
      id: 5,
      title: 'Mental Wellness During Home Recovery',
      date: 'August 15, 2024',
      author: 'Counselor Emma Davis',
      category: 'Mental Health',
      excerpt: 'Strategies to maintain mental health and emotional well-being during recovery.',
      image: '🧠',
      content: 'Mental wellness is just as important as physical health during the recovery process...',
    },
    {
      id: 6,
      title: 'Safety Tips for Fall Prevention',
      date: 'August 10, 2024',
      author: 'Safety Expert John Brown',
      category: 'Safety',
      excerpt: 'Create a safe home environment with these proven fall prevention strategies.',
      image: '🛡️',
      content: 'Falls are a common concern for seniors. Here are practical safety measures...',
    },
  ];

  selectedPost: BlogPost | null = null;

  viewPost(post: BlogPost) {
    this.selectedPost = post;
  }

  closePost() {
    this.selectedPost = null;
  }
}
