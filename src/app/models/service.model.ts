/**
 * Service Model - Complete service definitions for Tabeeb
 */

export interface Benefit {
  title: string;
  description: string;
}

export interface Pricing {
  shift8hrs: number;
  shift12hrs: number;
  shift24hrs: number;
  currency: string;
  note: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  whatIncluded: string[];
  whoItFor: string[];
  benefits: Benefit[];
  pricing: Pricing;
  seoKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  realExample: string;
  realExampleHeading?: string;
  relatedServices?: string[];
}

export const TABEEB_SERVICES: Service[] = [
  {
    id: 'svc-1',
    slug: 'home-nursing-care',
    title: 'Home Nursing Care',
    shortDescription: 'Professional skilled nursing for recovery, elderly care, and chronic conditions at home.',
    fullDescription: `Home nursing care is one of Tabeeb's most popular services. Our trained nurses provide 24/7 care for post-operative recovery, elderly patients, and chronic disease management. Each nurse has 5+ years experience with ICU and ward backgrounds. Services include wound care, medication management, vital monitoring, and patient hygiene. We follow hospital protocols for infection prevention and safety. Recovery at home with family support leads to 30-40% faster healing compared to hospital stays.`,
    image: '/assets/images/nursing-care.jpg',
    whatIncluded: [
      'Professional nurse (8, 12, or 24 hour shifts)',
      'Vital sign monitoring (BP, pulse, temp, O2)',
      'Medication management & injection',
      'Wound dressing & care',
      'Personal hygiene assistance',
      'Health record documentation',
      'Family guidance & education'
    ],
    whoItFor: [
      'Post-operative recovery patients',
      'Elderly patients needing daily care',
      'Chronic disease management (diabetes, hypertension)',
      'Bedridden patients',
      'Post-stroke rehabilitation',
      'Cancer patients requiring support'
    ],
    benefits: [
      { title: 'Faster Recovery', description: '30-40% faster healing at home vs hospital' },
      { title: 'Cost Savings', description: '60-70% cheaper than hospital admission' },
      { title: 'Family Support', description: 'Recover in familiar environment with loved ones' },
      { title: 'Infection Prevention', description: 'Lower infection risk than hospital' },
      { title: 'Continuity', description: 'Same nurse for consistency & trust' }
    ],
    pricing: {
      shift8hrs: 3500,
      shift12hrs: 5000,
      shift24hrs: 8000,
      currency: 'PKR',
      note: '20% cheaper than market rates. No hidden charges.'
    },
    seoKeywords: ['home nursing Lahore', 'nursing care at home', 'elderly care Lahore', 'post-operative nursing'],
    metaTitle: 'Home Nursing Care Lahore | Professional 24/7 Nursing',
    metaDescription: 'Professional home nursing care in Lahore. Trained nurses for post-op recovery, elderly care, chronic disease. 12-14 hour response. 20% cheaper.',
    realExample: 'Mrs. Hina Khan, 68, had hip replacement surgery. Instead of 2 weeks in hospital, Tabeeb sent a nurse for 24/7 care at home. In 3 weeks she was walking with support. Total cost: PKR 25,000 vs hospital cost of PKR 120,000. She recovered better at home surrounded by family.'
  },
  {
    id: 'svc-2',
    slug: 'home-icu-care',
    title: 'Home ICU Care',
    shortDescription: 'Advanced ICU-level monitoring and support in the comfort of your home.',
    fullDescription: `Tabeeb's Home ICU Care brings hospital-grade intensive care to your home. For patients requiring continuous monitoring, oxygen therapy, ventilator support, or advanced wound care, we provide 24/7 ICU-trained nurses and doctors. Our ICU staff have experience in critical care units and can manage complex medical situations at home. Equipment includes oxygen cylinders, monitors, suction machines, and emergency kits.`,
    image: '/assets/images/icu-care.jpg',
    whatIncluded: [
      '24/7 ICU-trained nurse',
      'Continuous vital monitoring',
      'Oxygen therapy & ventilator support',
      'IV therapy & medications',
      'Advanced wound management',
      'Feeding tube management',
      'Catheter care',
      'Daily doctor consultation (via phone/visit)'
    ],
    whoItFor: [
      'Patients on oxygen support',
      'Post-ICU transitional care',
      'Terminal/palliative care patients',
      'Patients on feeding tubes',
      'Complex wound care needs',
      'Critical conditions stable for home'
    ],
    benefits: [
      { title: 'Hospital at Home', description: 'ICU care without hospital stay' },
      { title: 'Lower Infection Risk', description: 'Avoid hospital-acquired infections' },
      { title: 'Family Presence', description: 'Loved ones nearby for comfort' },
      { title: 'Cost Savings', description: 'Hospital costs are 10x higher' },
      { title: 'Personalized Care', description: 'Same caregiver, personalized attention' }
    ],
    pricing: {
      shift8hrs: 4500,
      shift12hrs: 6500,
      shift24hrs: 10000,
      currency: 'PKR',
      note: '20% cheaper than market rates. Equipment available on rent.'
    },
    seoKeywords: ['ICU care at home', 'home ICU Lahore', 'intensive care home', 'oxygen therapy at home'],
    metaTitle: 'Home ICU Care Lahore | 24/7 Intensive Care',
    metaDescription: 'Advanced home ICU care in Lahore. Continuous monitoring, oxygen, ventilator support. ICU-trained nurses. 24/7 availability. Save 70% vs hospital.',
    realExample: 'Mr. Ashraf Ahmed, 72, survived a stroke but needed oxygen therapy. Hospital stay would cost PKR 500,000+. Tabeeb provided home ICU care for 45 days at PKR 360,000 total. He recovered better with family support and avoided hospital risks.'
  },
  {
    id: 'svc-3',
    slug: 'doctor-home-visit',
    title: 'Doctor at Home',
    shortDescription: 'Licensed doctors visit your home for consultations, diagnoses, and medical advice.',
    fullDescription: `Need a doctor but don't want to leave home? Tabeeb connects you with licensed doctors who visit your home for consultations. Doctors can perform basic examinations, prescribe medications, order lab tests, and provide medical advice. Response time: 2-3 hours in premium zones (Defence, DHA, Model Town, Gulberg, Cantt, Behria Town), 12-14 hours elsewhere. Perfect for elderly, bedridden, or busy patients.`,
    image: '/assets/images/doctor-visit.jpg',
    whatIncluded: [
      'Licensed doctor consultation',
      'Physical examination',
      'Medical history review',
      'Prescription & medications',
      'Lab test ordering',
      'Health advice & guidance',
      'Follow-up phone support',
      'Medical certificate if needed'
    ],
    whoItFor: [
      'Elderly patients unable to travel',
      'Bedridden or immobile patients',
      'Busy professionals',
      'Post-operative check-ups',
      'Chronic disease monitoring',
      'Second opinion consultations'
    ],
    benefits: [
      { title: 'Time Savings', description: 'No travel, no waiting rooms' },
      { title: 'Convenience', description: 'Doctor comes to you' },
      { title: 'Personalized Care', description: 'One-on-one attention' },
      { title: 'Home Records', description: 'Doctor sees actual living conditions' },
      { title: 'Quick Response', description: '2-3 hours in premium zones' }
    ],
    pricing: {
      shift8hrs: 3000,
      shift12hrs: 4500,
      shift24hrs: 5000,
      currency: 'PKR',
      note: 'Per visit pricing. 20% cheaper than clinic rates.'
    },
    seoKeywords: ['doctor at home Lahore', 'home doctor visit', 'online doctor consultation Lahore'],
    metaTitle: 'Doctor at Home Lahore | Home Medical Consultations',
    metaDescription: 'Licensed doctors visit home for consultations in Lahore. 2-3 hour response in Defence, DHA, Model Town. Prescriptions & advice at home.',
    realExample: 'Mr. Hassan Ali, 65, needed post-op check-up but couldn\'t drive. Doctor visited home, examined surgical site, prescribed antibiotics. Total cost: PKR 4,500 vs clinic visit PKR 5,000+ plus transport.'
  },
  {
    id: 'svc-4',
    slug: 'home-injection-services',
    title: 'Home Injection Services',
    shortDescription: 'Safe, sterile injections administered by certified nurses at your home.',
    fullDescription: `Whether it's insulin, antibiotics, vaccines, or other medications, Tabeeb nurses administer injections safely and sterile-ly at your home. No need to visit clinics or hospitals for routine injections. Our nurses use proper sterilization, correct techniques, and maintain medical records. Perfect for diabetics needing daily insulin or patients on antibiotic therapy.`,
    image: '/assets/images/injection-service.jpg',
    whatIncluded: [
      'Certified nurse for injection',
      'Sterilized equipment & needles',
      'Proper injection technique',
      'Vital monitoring if needed',
      'Medical record documentation',
      'Waste disposal (bio-safe)',
      'Patient education on self-injection'
    ],
    whoItFor: [
      'Diabetics needing daily insulin',
      'Patients on antibiotic therapy',
      'Vitamin/supplement injections',
      'Vaccination programs',
      'Rheumatoid arthritis treatment',
      'Cancer patients (chemo support)'
    ],
    benefits: [
      { title: 'Safety', description: 'Certified, sterile technique' },
      { title: 'Convenience', description: 'No clinic visits needed' },
      { title: 'Pain Management', description: 'Experienced nurses minimize discomfort' },
      { title: 'Time Saving', description: 'Quick, efficient administration' },
      { title: 'Records', description: 'Medical documentation maintained' }
    ],
    pricing: {
      shift8hrs: 1500,
      shift12hrs: 2000,
      shift24hrs: 2500,
      currency: 'PKR',
      note: 'Per injection or daily/weekly packages. Medication cost separate.'
    },
    seoKeywords: ['home injection service', 'insulin injection at home', 'home vaccination Lahore'],
    metaTitle: 'Home Injection Services Lahore | Safe Medical Injections',
    metaDescription: 'Certified nurses administer injections at home. Insulin, antibiotics, vaccines. Sterile, safe technique. Lahore 24/7 service.',
    realExample: 'Mrs. Fatima Khan, diabetic for 10 years, struggled with daily clinic visits. Tabeeb nurse visits daily for insulin injection (PKR 500/day). Saves 2 hours transport + clinic cost per day. Monitoring improved, HbA1c dropped.'
  },
  {
    id: 'svc-5',
    slug: 'home-lab-services',
    title: 'Home Lab Services',
    shortDescription: 'Blood tests, samples collected at home with quick, accurate results.',
    fullDescription: `No need to visit labs or hospitals for blood tests. Tabeeb lab technicians come to your home, collect samples safely, and send to certified labs. Results ready within 24 hours. Tests include CBC, blood glucose, cholesterol, liver/kidney function, thyroid, and more. Perfect for elderly, bedridden, or busy patients who need regular monitoring.`,
    image: '/assets/images/lab-service.jpg',
    whatIncluded: [
      'Home blood sample collection',
      'Trained phlebotomist',
      'Sterilized collection equipment',
      'Lab processing & analysis',
      'Digital report within 24 hours',
      'Doctor consultation (if needed)',
      'Sample storage & handling'
    ],
    whoItFor: [
      'Patients with chronic diseases',
      'Elderly requiring regular monitoring',
      'Bedridden patients',
      'Pregnancy monitoring (prenatal labs)',
      'Pre-operative testing',
      'Routine health check-ups'
    ],
    benefits: [
      { title: 'Convenience', description: 'Sample collection at home' },
      { title: 'Fast Results', description: '24-hour turnaround' },
      { title: 'Accuracy', description: 'Certified lab testing' },
      { title: 'Safety', description: 'Sterile technique, no cross-infection' },
      { title: 'Monitoring', description: 'Track health trends over time' }
    ],
    pricing: {
      shift8hrs: 1000,
      shift12hrs: 1200,
      shift24hrs: 1500,
      currency: 'PKR',
      note: 'Collection fee. Test cost charged separately based on tests ordered.'
    },
    seoKeywords: ['home lab test Lahore', 'blood test at home', 'home pathology services'],
    metaTitle: 'Home Lab Services Lahore | Blood Tests at Home',
    metaDescription: 'Blood tests collected at home by certified lab technicians. 24-hour results. All major tests available. Convenient home service in Lahore.',
    realExample: 'Mrs. Sara Malik, 72, diabetic & hypertensive, needed monthly monitoring. Home lab visits: PKR 1,500/month vs clinic visits PKR 5,000+. Better compliance, trends tracked easily.'
  },
  {
    id: 'svc-6',
    slug: 'physiotherapy-home',
    title: 'Physiotherapy at Home',
    shortDescription: 'Professional physiotherapy and rehabilitation in the comfort of your home.',
    fullDescription: `Recover from injury or surgery with physiotherapy at home. Tabeeb physiotherapists provide one-on-one sessions focusing on movement, flexibility, strength, and pain management. Ideal after stroke, joint surgery, falls, or chronic pain conditions. Sessions include exercises, manual therapy, and progress tracking. Patients see results faster with personalized home-based rehab.`,
    image: '/assets/images/physio.jpg',
    whatIncluded: [
      'Assessment & treatment plan',
      'Exercise instruction & supervision',
      'Manual therapy & mobilization',
      'Stretching & flexibility work',
      'Pain management techniques',
      'Home exercise program',
      'Progress tracking & documentation'
    ],
    whoItFor: [
      'Post-operative rehabilitation',
      'Stroke recovery (motor function)',
      'Fall prevention & balance training',
      'Arthritis & joint pain',
      'Sports injuries',
      'Chronic pain conditions',
      'Elderly mobility improvement'
    ],
    benefits: [
      { title: 'Personalized', description: '1-on-1 attention & custom plan' },
      { title: 'Convenient', description: 'No travel, comfort of home' },
      { title: 'Faster Recovery', description: 'Regular sessions, consistent progress' },
      { title: 'Equipment Available', description: 'Mats, bands, and tools provided' },
      { title: 'Safety', description: 'Expert supervision reduces re-injury' }
    ],
    pricing: {
      shift8hrs: 2000,
      shift12hrs: 2500,
      shift24hrs: 3000,
      currency: 'PKR',
      note: 'Per session (45-60 min). Packages available: weekly, twice-weekly.'
    },
    seoKeywords: ['physiotherapy at home Lahore', 'home rehabilitation', 'stroke recovery physiotherapy'],
    metaTitle: 'Physiotherapy at Home Lahore | Home Rehabilitation',
    metaDescription: 'Professional physiotherapists provide 1-on-1 sessions at home. Stroke recovery, post-op rehab, pain management. Lahore service.',
    realExample: 'Mrs. Aisha Siddiqui, post-stroke, needed daily physio. Home sessions 3x/week helped her walk again in 6 weeks. Cost: PKR 24,000 vs clinic PKR 50,000+ with better outcomes.'
  },
  {
    id: 'svc-7',
    slug: 'home-pharmacy',
    title: 'Home Pharmacy',
    shortDescription: 'Medicines delivered to your home with free delivery and consultation.',
    fullDescription: `Can't go to the pharmacy? We deliver medicines to your home. Order online or call, and we deliver within 2 hours in Lahore. All medicines from authorized suppliers, authentic, at market rates. Includes delivery, free consultation with pharmacist, and proper storage guidance. Perfect for elderly patients on multiple medicines.`,
    image: '/assets/images/pharmacy.jpg',
    whatIncluded: [
      'All prescription medicines',
      'OTC medications',
      'Health supplements',
      'Medical devices (glucose meter, BP cuff, etc.)',
      'Fast delivery (2 hrs)',
      'Pharmacist consultation (free)',
      'Authentic medicines guaranteed',
      'Medical record storage (optional)'
    ],
    whoItFor: [
      'Elderly on chronic medications',
      'Bedridden patients',
      'Busy professionals',
      'Post-operative patients',
      'People during lockdown/travel',
      'Regular prescription users'
    ],
    benefits: [
      { title: 'Convenience', description: 'Home delivery in 2 hours' },
      { title: 'Safety', description: 'Authentic medicines verified' },
      { title: 'Consultation', description: 'Free pharmacist advice included' },
      { title: 'No Hassle', description: 'No standing in lines, no traffic' },
      { title: 'Records', description: 'Keep medicine history organized' }
    ],
    pricing: {
      shift8hrs: 500,
      shift12hrs: 500,
      shift24hrs: 500,
      currency: 'PKR',
      note: 'Delivery fee: PKR 500. Medicine cost charged at market rate.'
    },
    seoKeywords: ['online pharmacy Lahore', 'medicine delivery home', 'online medicine Lahore'],
    metaTitle: 'Home Pharmacy Lahore | Medicine Delivery Service',
    metaDescription: 'Authentic medicines delivered home in 2 hours. Free pharmacist consultation. All prescriptions available. Lahore home pharmacy service.',
    realExample: 'Mr. Tariq Hussain, taking 5 medications daily, ordered via Tabeeb Pharmacy. Delivered in 90 minutes. Pharmacist explained drug interactions. Now saves 3 hours weekly on pharmacy runs.'
  }
];
