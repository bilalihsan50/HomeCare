/**
 * Testimonial Model - Real patient testimonials for Tabeeb
 */

export interface Testimonial {
  id: string;
  name: string;
  area: string;
  age?: number;
  condition: string;
  serviceUsed: string;
  rating: number;
  testimonialText: string;
  image?: string;
  serviceSlug?: string;
  date?: string;
}

export const TABEEB_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mrs. Hina Khan',
    area: 'DHA, Lahore',
    age: 68,
    condition: 'Post-operative recovery (hip replacement)',
    serviceUsed: 'Home Nursing Care',
    rating: 5,
    testimonialText: `I had hip replacement surgery and dreaded hospital stay. Tabeeb provided 24/7 nursing at home. In 3 weeks I was walking with support. The nurse was professional, the care was excellent, and recovery was faster at home with family. Total cost was only PKR 25,000 vs hospital cost of PKR 120,000. I cannot thank them enough.`,
    serviceSlug: 'home-nursing-care',
    image: '/assets/images/testimonial-hina.jpg',
    date: '2024-08'
  },
  {
    id: 'test-2',
    name: 'Mr. Ashraf Ahmed',
    area: 'Gulberg, Lahore',
    age: 72,
    condition: 'Post-stroke oxygen therapy',
    serviceUsed: 'Home ICU Care',
    rating: 5,
    testimonialText: `After a stroke, I needed oxygen therapy and doctors said I couldn't go home. Tabeeb arranged home ICU care with 24/7 nursing. The ICU nurse was experienced, equipment was proper, and I recovered better surrounded by family than I would in a hospital. Hospital would have cost PKR 500,000+. This saved my family money and my mind from hospital stress.`,
    serviceSlug: 'home-icu-care',
    image: '/assets/images/testimonial-ashraf.jpg',
    date: '2024-07'
  },
  {
    id: 'test-3',
    name: 'Mrs. Sara Malik',
    area: 'Model Town, Lahore',
    age: 58,
    condition: 'Diabetes and hypertension monitoring',
    serviceUsed: 'Home Lab Services',
    rating: 5,
    testimonialText: `I'm diabetic and hypertensive, needing monthly blood tests. Visiting labs was a hassle, waiting in lines, wasting time. Tabeeb lab technician comes home, collects blood safely, and results are ready next day. Now I monitor my health properly. Cost is only PKR 1,500 vs clinic PKR 5,000+. The convenience changed my life!`,
    serviceSlug: 'home-lab-services',
    image: '/assets/images/testimonial-sara.jpg',
    date: '2024-09'
  },
  {
    id: 'test-4',
    name: 'Mr. Hassan Ali',
    area: 'Cantt, Lahore',
    age: 65,
    condition: 'Post-operative check-up',
    serviceUsed: 'Doctor at Home',
    rating: 5,
    testimonialText: `After surgery, I needed post-op check-up but couldn't drive. Doctor from Tabeeb visited home, examined the surgical site, prescribed antibiotics. Very professional. I saved transport costs and time. The convenience was amazing. Why should patients struggle to reach doctors when doctors can visit?`,
    serviceSlug: 'doctor-home-visit',
    image: '/assets/images/testimonial-hassan.jpg',
    date: '2024-08'
  },
  {
    id: 'test-5',
    name: 'Mrs. Fatima Khan',
    area: 'Johar Town, Lahore',
    age: 55,
    condition: 'Diabetes requiring daily insulin',
    serviceUsed: 'Home Injection Services',
    rating: 5,
    testimonialText: `I'm diabetic for 10 years, struggling with daily clinic visits for insulin injections. Tabeeb nurse visits daily for injection right at home. PKR 500 per visit saves me 2+ hours transport and stress. My HbA1c improved because monitoring is now consistent. This is what modern healthcare should be!`,
    serviceSlug: 'home-injection-services',
    image: '/assets/images/testimonial-fatima.jpg',
    date: '2024-06'
  },
  {
    id: 'test-6',
    name: 'Mrs. Aisha Siddiqui',
    area: 'Bahria Town, Lahore',
    age: 62,
    condition: 'Stroke recovery (physiotherapy)',
    serviceUsed: 'Physiotherapy at Home',
    rating: 5,
    testimonialText: `After stroke, I was paralyzed on one side. Tabeeb physiotherapist came 3x weekly to my home. His expertise and personalized sessions helped me walk again in 6 weeks! Cost was PKR 24,000 vs clinic PKR 50,000+ with better results. Home-based therapy meant comfort, safety, and faster recovery. Grateful forever.`,
    serviceSlug: 'physiotherapy-home',
    image: '/assets/images/testimonial-aisha.jpg',
    date: '2024-05'
  },
  {
    id: 'test-7',
    name: 'Mr. Tariq Hussain',
    area: 'Defence, Lahore',
    age: 70,
    condition: 'Chronic medications management',
    serviceUsed: 'Home Pharmacy',
    rating: 5,
    testimonialText: `I'm on 5 medications daily. Tabeeb Pharmacy delivers everything home in 90 minutes. Free pharmacist consultation explained drug interactions. Saves me 3 hours weekly on pharmacy runs. All medicines authentic, prices fair. This is convenience at its best. Highly recommended for elderly like me.`,
    serviceSlug: 'home-pharmacy',
    image: '/assets/images/testimonial-tariq.jpg',
    date: '2024-07'
  }
];
