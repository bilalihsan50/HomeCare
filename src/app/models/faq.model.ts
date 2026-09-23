/**
 * FAQ Model - Frequently Asked Questions
 */

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  order?: number;
  relatedServiceSlug?: string;
}

export const TABEEB_FAQS: FAQ[] = [
  // GENERAL
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Tabeeb?',
    answer: 'Tabeeb is a home healthcare service in Lahore, Pakistan. We bring doctors, nurses, physiotherapists, lab technicians, and pharmacists to your home. Founded 3 years ago, we now have 90-110+ qualified staff. We operate 24/7 across all of Lahore with our motto: "Hospital care at home."',
    order: 1
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'How long has Tabeeb been operating?',
    answer: 'Tabeeb started 3 years ago with offline services, then went online 1 year ago. We have successfully served hundreds of families in Lahore. Our team includes experienced nurses, doctors, physiotherapists, and lab technicians.',
    order: 2
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'Is Tabeeb available 24/7?',
    answer: 'Yes! We operate 24 hours a day, 7 days a week. You can call, WhatsApp, or use our website to book services anytime.',
    order: 3
  },
  {
    id: 'faq-4',
    category: 'General',
    question: 'What areas in Lahore do you serve?',
    answer: 'We serve all of Lahore including Defence, DHA, Gulberg, Model Town, Cantt, Bahria Town, Johar Town, and all other areas. Response time varies: 2-3 hours in premium zones, 12-14 hours elsewhere.',
    order: 4
  },
  // BOOKING & RESPONSE
  {
    id: 'faq-5',
    category: 'Booking',
    question: 'How do I book a service?',
    answer: 'You can book by:1. WhatsApp: +92 3248883803 (fastest)2. Call: +92 3248883803 3. Website: Fill the booking form 4. Walk-in (if available)We confirm within 30 minutes and send the caregiver on time.',
    order: 5
  },
  {
    id: 'faq-6',
    category: 'Booking',
    question: 'What is the response time?',
    answer: 'Response time depends on your area:Premium zones (Defence, DHA, Gulberg, Model Town, Cantt, Bahria Town, Johar Town): 2-3 hoursOther areas across Lahore: 12-14 hoursEmergencies: We prioritize urgent cases.',
    order: 6
  },
  {
    id: 'faq-7',
    category: 'Booking',
    question: 'Do you provide emergency services?',
    answer: 'Yes, we handle emergencies. Call or WhatsApp immediately. Our experienced staff can handle urgent medical situations at home. For life-threatening emergencies (cardiac arrest, severe trauma), hospital visit is necessary.',
    order: 7
  },
  // PRICING
  {
    id: 'faq-8',
    category: 'Pricing',
    question: 'Why are Tabeeb prices 20% cheaper?',
    answer: 'We eliminate overhead costs of clinics and hospitals. No rent, no receptionist, no utilities. We pass these savings to patients. Direct home service = lower cost.',
    order: 8
  },
  {
    id: 'faq-9',
    category: 'Pricing',
    question: 'Are there hidden charges?',
    answer: 'NO. Our pricing is transparent. You pay only for services booked. No hidden registration fees, no surprise charges. What you see is what you pay.',
    order: 9
  },
  {
    id: 'faq-10',
    category: 'Pricing',
    question: 'Do you offer discounts for package bookings?',
    answer: 'Yes! Book multiple sessions (weekly/monthly) and get 10-15% discounts. Ask when booking. We also offer corporate packages for offices.',
    order: 10
  },
  // SERVICES
  {
    id: 'faq-11',
    category: 'Services',
    question: 'What services does Tabeeb offer?',
    answer: 'We offer: Home Nursing (8/12/24 hrs), Home ICU, Doctor visits, Injections, Lab tests, Physiotherapy, and Home Pharmacy. More services coming soon.',
    order: 11,
    relatedServiceSlug: 'home-nursing-care'
  },
  {
    id: 'faq-12',
    category: 'Services',
    question: 'Can I choose the same nurse/doctor?',
    answer: 'Yes. If you\'ve worked with a particular caregiver and want them again, we arrange it. Continuity of care improves results.',
    order: 12
  },
  {
    id: 'faq-13',
    category: 'Services',
    question: 'What if I\'m not satisfied with the caregiver?',
    answer: 'Tell us immediately. We send a replacement same-day at no extra cost. Your satisfaction is our priority. Customer feedback helps us improve.',
    order: 13
  },
  // QUALIFICATIONS
  {
    id: 'faq-14',
    category: 'Qualifications',
    question: 'Are Tabeeb staff qualified and trained?',
    answer: 'Absolutely. All nurses are registered/certified with 5+ years experience. Doctors are licensed physicians. Physiotherapists hold PT degrees. All staff undergo Tabeeb training on home care protocols.',
    order: 14
  },
  {
    id: 'faq-15',
    category: 'Qualifications',
    question: 'Do caregivers carry ID and credentials?',
    answer: 'Yes. Every caregiver has ID badge and certificate. You can verify credentials. We maintain staff database for your safety and transparency.',
    order: 15
  },
  // MEDICAL SAFETY
  {
    id: 'faq-16',
    category: 'Medical',
    question: 'Is home care as safe as hospital care?',
    answer: 'For stable patients, home care is SAFER. Hospitals have infection risks, stress, and family separation. Home care reduces infection, speeds recovery, and keeps family nearby. For emergencies, hospital is still necessary.',
    order: 16
  },
  {
    id: 'faq-17',
    category: 'Medical',
    question: 'What if something goes wrong at home?',
    answer: 'Our nurses are trained for emergencies. They monitor vitals, identify complications early, and call doctor/ambulance if needed. We maintain 24/7 doctor on-call support.',
    order: 17
  },
  {
    id: 'faq-18',
    category: 'Medical',
    question: 'Does Tabeeb work with hospitals?',
    answer: 'Yes. We coordinate with hospitals for post-discharge care, lab tests, and doctor follow-ups. Many hospitals recommend us to patients.',
    order: 18
  }
];

export const FAQ_CATEGORIES = ['General', 'Booking', 'Pricing', 'Services', 'Qualifications', 'Medical'];
