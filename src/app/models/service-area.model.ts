/**
 * Service Area Model - Lahore zones and coverage
 */

export interface ServiceArea {
  id: string;
  name: string;
  zone: 'premium' | 'secondary';
  responseTime: string;
  description: string;
  neighborhoods?: string[];
  detailedDescription?: string; // For SEO content
  seoKeywords?: string[];
}

export const TABEEB_SERVICE_AREAS: ServiceArea[] = [
  // PREMIUM ZONES - 2-3 hour response
  {
    id: 'area-1',
    name: 'Defence (DHA Phase 1-6)',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Planned residential area with high population density. Most healthcare requests from Defence.',
    neighborhoods: ['Defence Raiwind Road', 'DHA Phase 1-6', 'Cavalry Ground', 'Jilani Road'],
    detailedDescription: 'Defence is one of Lahore\'s most established and affluent residential areas. Our professional nursing team provides 24/7 home healthcare services including ICU care, post-operative care, elderly care, and physiotherapy. With experienced nurses and doctors available within 2-3 hours, we ensure your family receives the best care at home.',
    seoKeywords: ['home nursing Defence Lahore', 'doctor at home Defence', 'nursing care Defence Lahore', 'physiotherapy Defence', 'ICU care Defence']
  },
  {
    id: 'area-2',
    name: 'DHA Lahore',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Developed Housing Authority area with good infrastructure and many seniors.',
    neighborhoods: ['DHA Phase 1-9', 'DHA Rahbar', 'DHA Multan Road', 'Defence Phase 6'],
    detailedDescription: 'DHA Lahore spans multiple phases with thousands of families depending on quality healthcare. Tabeeb provides comprehensive home nursing, doctor consultations, lab tests, and emergency medical support. Our team is specially trained for senior care, post-hospital recovery, and chronic disease management.',
    seoKeywords: ['home nursing DHA Lahore', 'nurse at home DHA', 'doctor consultation DHA', 'elderly care DHA', 'home healthcare DHA']
  },
  {
    id: 'area-3',
    name: 'Gulberg',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Upscale residential locality with established families and professionals.',
    neighborhoods: ['Gulberg II', 'Gulberg III', 'Gulberg IV', 'Gulberg V'],
    detailedDescription: 'Gulberg is known for its affluent residents and established families. We serve all Gulberg phases with premium home healthcare services including specialist consultations, advanced nursing care, physiotherapy, and home lab services. Fast response time ensures immediate care when you need it most.',
    seoKeywords: ['home nursing Gulberg', 'doctor at home Gulberg', 'nursing services Gulberg', 'physiotherapy Gulberg', 'home care Gulberg Lahore']
  },
  {
    id: 'area-4',
    name: 'Model Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Established neighborhood with many elderly residents requiring care services.',
    neighborhoods: ['Model Town A-D Blocks', 'Abbasia', 'Town Park'],
    detailedDescription: 'Model Town is home to many senior citizens and retired professionals. Tabeeb specializes in elderly care, managing chronic conditions, and providing compassionate home nursing. Our experienced team understands the unique healthcare needs of this community.',
    seoKeywords: ['home nursing Model Town', 'elderly care Model Town', 'nurse at home Model Town', 'doctor visit Model Town', 'home healthcare Model Town Lahore']
  },
  {
    id: 'area-5',
    name: 'Cantt (Cantonment)',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Cantonment area with organized infrastructure and high service demand.',
    neighborhoods: ['Mall Road Cantt', 'Lawrence Road', 'Jinnah Road', 'Racecourse Park'],
    detailedDescription: 'Cantonment is a well-organized military area with strict protocols. Our team is trained to work within these guidelines and provides professional home healthcare including nursing care, doctor consultations, physiotherapy, and emergency support 24/7.',
    seoKeywords: ['home nursing Cantt Lahore', 'nurse at home Cantonment', 'doctor consultation Cantt', 'nursing Cantt', 'home care Cantonment Lahore']
  },
  {
    id: 'area-6',
    name: 'Bahria Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Modern master-planned community with developing healthcare infrastructure.',
    neighborhoods: ['Bahria Town Phase 1-8', 'Bahria Stores', 'Bahria Awami Park'],
    detailedDescription: 'Bahria Town is a modern gated community with excellent infrastructure. Tabeeb provides integrated home healthcare services including nursing, doctor visits, laboratory tests, and pharmacy services. Our team ensures quick response and professional medical care.',
    seoKeywords: ['home nursing Bahria Town', 'doctor at home Bahria', 'nursing care Bahria Town', 'healthcare Bahria Town Lahore', 'ICU care Bahria']
  },
  {
    id: 'area-7',
    name: 'Johar Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Developed residential area with mature infrastructure.',
    neighborhoods: ['Johar Town Block A-O', 'Jilani Park', 'Thokar Niaz Baig'],
    detailedDescription: 'Johar Town is a mature residential community with established families. We provide comprehensive home healthcare including post-operative care, chronic disease management, physiotherapy, and elder care with 24/7 availability.',
    seoKeywords: ['home nursing Johar Town', 'nurse at home Johar Town', 'doctor visit Johar', 'physiotherapy Johar Town', 'home healthcare Johar Town Lahore']
  },

  // ADDITIONAL PREMIUM ZONES - 2-3 hour response
  {
    id: 'area-7a',
    name: 'Faisal Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Modern residential development with growing families and healthcare demand.',
    neighborhoods: ['Faisal Town Block A-G', 'Faisal Avenue', 'Main Boulevard'],
    detailedDescription: 'Faisal Town is a rapidly developing residential area attracting young families and professionals. Tabeeb offers professional home nursing, doctor consultations, child care support, maternity services, and emergency medical response within 2-3 hours.',
    seoKeywords: ['home nursing Faisal Town', 'nurse at home Faisal Town', 'doctor consultation Faisal', 'nursing services Faisal Town', 'home healthcare Faisal Town Lahore']
  },
  {
    id: 'area-7b',
    name: 'Garden Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Established upscale residential area with mature infrastructure.',
    neighborhoods: ['Garden Town Block A-O', 'Nasir Bagh', 'Garden Avenue'],
    detailedDescription: 'Garden Town is an upscale neighborhood with established residents and senior citizens. We provide specialized elderly care, nursing support, doctor visits, and home physiotherapy with our experienced healthcare professionals.',
    seoKeywords: ['home nursing Garden Town', 'nurse at home Garden Town', 'elderly care Garden Town', 'doctor at home Garden Town', 'home healthcare Garden Town Lahore']
  },
  {
    id: 'area-7c',
    name: 'Askari (Military Housing)',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Military residential community with organized infrastructure.',
    neighborhoods: ['Askari Phase 1-5', 'Askari Housing', 'Military Housing'],
    detailedDescription: 'Askari is a well-organized military housing community. Our team is trained to provide professional healthcare services including nursing care, medical consultations, physiotherapy, and emergency support while respecting military protocols.',
    seoKeywords: ['home nursing Askari', 'nurse at home Askari', 'doctor consultation Askari', 'nursing care Askari Lahore', 'home healthcare Askari']
  },
  {
    id: 'area-7d',
    name: 'Sui Gas Housing',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Well-planned housing colony for Sui Gas employees.',
    neighborhoods: ['Sui Gas Housing', 'Employee Housing Blocks', 'Sui Gas Quarters'],
    detailedDescription: 'Sui Gas Housing is a planned community for company employees. Tabeeb provides comprehensive home healthcare including nursing, doctor visits, emergency support, and specialized care for occupational health issues.',
    seoKeywords: ['home nursing Sui Gas', 'nurse at home Sui Gas', 'doctor visit Sui Gas', 'nursing care Sui Gas Lahore', 'home healthcare Sui Gas']
  },
  {
    id: 'area-7e',
    name: 'WAPDA Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Government employee housing with good infrastructure.',
    neighborhoods: ['WAPDA Town Block A-H', 'WAPDA Quarters', 'Employee Housing'],
    detailedDescription: 'WAPDA Town houses government employees with good community infrastructure. We provide reliable home nursing, doctor consultations, laboratory services, and physiotherapy with experienced healthcare professionals available 24/7.',
    seoKeywords: ['home nursing WAPDA Town', 'nurse at home WAPDA', 'doctor at home WAPDA Town', 'nursing services WAPDA', 'home healthcare WAPDA Town Lahore']
  },

  // SECONDARY ZONES - 12-14 hour response
  {
    id: 'area-8',
    name: 'Lahore City (Downtown)',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'City center and downtown Lahore areas.',
    neighborhoods: ['Mall Road', 'The Mall', 'Anarkali', 'Badshahi', 'Clock Tower'],
    detailedDescription: 'Downtown Lahore serves diverse populations from various backgrounds. We provide accessible home healthcare services including nursing, medical consultations, and emergency support across all downtown areas.',
    seoKeywords: ['home nursing downtown Lahore', 'nurse at home Anarkali', 'doctor consultation mall road', 'nursing care city center', 'home healthcare downtown Lahore']
  },
  {
    id: 'area-10',
    name: 'Samanabad',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Middle-class residential area with growing healthcare needs.',
    neighborhoods: ['Samanabad A-E', 'Thokar Niaz Baig Road', 'Samanabad Main Road'],
    detailedDescription: 'Samanabad is a middle-class residential community with diverse population. Tabeeb offers affordable home healthcare including nursing care, doctor visits, and emergency medical support to serve this community.',
    seoKeywords: ['home nursing Samanabad', 'nurse at home Samanabad', 'affordable nursing Samanabad', 'doctor visit Samanabad', 'home healthcare Samanabad Lahore']
  },
  {
    id: 'area-11',
    name: 'Township',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Developed township with mixed residential population.',
    neighborhoods: ['Township Block A-G', 'Farrukhabad', 'Sabzazar'],
    detailedDescription: 'Township is a developed area with diverse residents. We serve all blocks with comprehensive home healthcare including nursing, medical consultations, physiotherapy, and emergency response.',
    seoKeywords: ['home nursing Township', 'nurse at home Township', 'doctor consultation Township', 'nursing care Township Lahore', 'home healthcare Township']
  },
  {
    id: 'area-12',
    name: 'Allama Iqbal Town',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Large residential area east of city center.',
    neighborhoods: ['Allama Iqbal Town A-P', 'Tanveer Nagar', 'Abdullah Garden'],
    detailedDescription: 'Allama Iqbal Town is a large residential area with thousands of families. Tabeeb provides reliable home nursing, doctor visits, emergency medical services, and chronic disease management for this community.',
    seoKeywords: ['home nursing Allama Iqbal Town', 'nurse at home Iqbal Town', 'doctor consultation Allama Iqbal', 'nursing care Iqbal Town', 'home healthcare Allama Iqbal Lahore']
  },
  {
    id: 'area-13',
    name: 'Iqbal Park',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Residential neighborhood near Allama Iqbal Town.',
    neighborhoods: ['Iqbal Park', 'Bagh-e-Jinnah', 'Lawrence Garden'],
    detailedDescription: 'Iqbal Park is a residential area connected to Allama Iqbal Town. We serve residents with professional nursing care, medical consultations, and emergency support.',
    seoKeywords: ['home nursing Iqbal Park', 'nurse at home Iqbal Park', 'doctor visit Iqbal Park', 'nursing services Iqbal Park', 'home healthcare Iqbal Park Lahore']
  },
  {
    id: 'area-14',
    name: 'Wagha Border Area',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Developing area towards Wagha border.',
    neighborhoods: ['Wagha', 'Thokar Niaz Baig', 'Raiwind Road'],
    detailedDescription: 'Wagha area is developing with growing residential communities. Tabeeb provides home nursing, doctor consultations, and medical support to residents of this border region.',
    seoKeywords: ['home nursing Wagha', 'nurse at home Wagha', 'doctor visit Wagha area', 'nursing care Wagha Lahore', 'home healthcare Wagha border']
  },
  {
    id: 'area-15',
    name: 'Raiwind & Outskirts',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Developing areas on outskirts of Lahore.',
    neighborhoods: ['Raiwind Road', 'Sheikhupura Road', 'Kasur Road', 'Okara Road'],
    detailedDescription: 'Lahore\'s outskirts and developing areas are growing rapidly. We serve these communities with accessible home nursing, emergency medical care, and healthcare consultations.',
    seoKeywords: ['home nursing Raiwind', 'nurse at home outskirts', 'doctor consultation Sheikhupura Road', 'nursing care outskirts Lahore', 'home healthcare Raiwind Lahore']
  },
  {
    id: 'area-16',
    name: 'Muslim Town',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Established middle-class neighborhood.',
    neighborhoods: ['Muslim Town A-D', 'Muslim Town Main Road', 'Adjacent Blocks'],
    detailedDescription: 'Muslim Town is an established neighborhood serving middle-class families. Tabeeb offers affordable and reliable home healthcare including nursing, doctor visits, and emergency medical support.',
    seoKeywords: ['home nursing Muslim Town', 'nurse at home Muslim Town', 'affordable nursing Muslim Town', 'doctor visit Muslim Town', 'home healthcare Muslim Town Lahore']
  },
  {
    id: 'area-17',
    name: 'Walled City Old Lahore',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Historic old city area with dense population.',
    neighborhoods: ['Walled City', 'Badshahi Mosque Area', 'Fort Road'],
    detailedDescription: 'The historic walled city houses diverse populations. We serve residents with culturally sensitive home nursing and medical care.',
    seoKeywords: ['home nursing walled city', 'nurse at home old Lahore', 'doctor visit fort area', 'nursing care historic Lahore', 'home healthcare Walled City']
  },
  {
    id: 'area-18',
    name: 'Gulshan-e-Ravi',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Developing planned area with growing population.',
    neighborhoods: ['Gulshan-e-Ravi Blocks', 'Ravi Residential Area', 'Development Blocks'],
    detailedDescription: 'Gulshan-e-Ravi is a developing planned community. Tabeeb serves residents with professional home healthcare including nursing, medical consultations, and emergency support.',
    seoKeywords: ['home nursing Gulshan Ravi', 'nurse at home Gulshan', 'doctor visit Gulshan Ravi', 'nursing care Gulshan Ravi', 'home healthcare Gulshan Ravi Lahore']
  }
];

// Helper functions
export function getPremiumZones(): ServiceArea[] {
  return TABEEB_SERVICE_AREAS.filter(area => area.zone === 'premium');
}

export function getSecondaryZones(): ServiceArea[] {
  return TABEEB_SERVICE_AREAS.filter(area => area.zone === 'secondary');
}

export function getAllZones(): ServiceArea[] {
  return TABEEB_SERVICE_AREAS;
}

export function getZoneByName(name: string): ServiceArea | undefined {
  return TABEEB_SERVICE_AREAS.find(area => 
    area.name.toLowerCase() === name.toLowerCase()
  );
}

export function getResponseTimeForZone(zoneName: string): string {
  const zone = getZoneByName(zoneName);
  return zone ? zone.responseTime : '12-14 hours';
}
