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
}

export const TABEEB_SERVICE_AREAS: ServiceArea[] = [
  // PREMIUM ZONES - 2-3 hour response
  {
    id: 'area-1',
    name: 'Defence',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Planned residential area with high population density. Most healthcare requests from Defence.',
    neighborhoods: ['Defence Raiwind Road', 'DHA Phase 1-6', 'Cavalry Ground', 'Jilani Road']
  },
  {
    id: 'area-2',
    name: 'DHA',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Developed Housing Authority area with good infrastructure and many seniors.',
    neighborhoods: ['DHA Phase 1-9', 'DHA Rahbar', 'DHA Multan Road', 'Defence Phase 6']
  },
  {
    id: 'area-3',
    name: 'Gulberg',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Upscale residential locality with established families and professionals.',
    neighborhoods: ['Gulberg II', 'Gulberg III', 'Gulberg IV', 'Gulberg V']
  },
  {
    id: 'area-4',
    name: 'Model Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Established neighborhood with many elderly residents requiring care services.',
    neighborhoods: ['Model Town A-D Blocks', 'Abbasia', 'Town Park']
  },
  {
    id: 'area-5',
    name: 'Cantt',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Cantonment area with organized infrastructure and high service demand.',
    neighborhoods: ['Mall Road Cantt', 'Lawrence Road', 'Jinnah Road', 'Racecourse Park']
  },
  {
    id: 'area-6',
    name: 'Bahria Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Modern master-planned community with developing healthcare infrastructure.',
    neighborhoods: ['Bahria Town Phase 1-8', 'Bahria Stores', 'Bahria Awami Park']
  },
  {
    id: 'area-7',
    name: 'Johar Town',
    zone: 'premium',
    responseTime: '2-3 hours',
    description: 'Developed residential area with mature infrastructure.',
    neighborhoods: ['Johar Town Block A-O', 'Jilani Park', 'Thokar Niaz Baig']
  },

  // SECONDARY ZONES - 12-14 hour response
  {
    id: 'area-8',
    name: 'Lahore City',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'City center and downtown Lahore areas.',
    neighborhoods: ['Mall Road', 'The Mall', 'Anarkali', 'Badshahi', 'Clock Tower']
  },
  {
    id: 'area-9',
    name: 'Wapda Town',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Well-planned residential colony on Thokar Niaz Baig.',
    neighborhoods: ['Wapda Town Block A-H', 'Thokar Niaz Baig']
  },
  {
    id: 'area-10',
    name: 'Samanabad',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Middle-class residential area with growing healthcare needs.',
    neighborhoods: ['Samanabad A-E', 'Thokar Niaz Baig Road']
  },
  {
    id: 'area-11',
    name: 'Township',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Developed township with mixed residential population.',
    neighborhoods: ['Township Block A-G', 'Farrukhabad', 'Sabzazar']
  },
  {
    id: 'area-12',
    name: 'Allama Iqbal Town',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Large residential area east of city center.',
    neighborhoods: ['Allama Iqbal Town A-P', 'Tanveer Nagar', 'Abdullah Garden']
  },
  {
    id: 'area-13',
    name: 'Iqbal Park',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Residential neighborhood near Allama Iqbal Town.',
    neighborhoods: ['Iqbal Park', 'Bagh-e-Jinnah', 'Lawrence Garden']
  },
  {
    id: 'area-14',
    name: 'Wagha',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Developing area towards Wagha border.',
    neighborhoods: ['Wagha', 'Thokar Niaz Baig', 'Raiwind Road']
  },
  {
    id: 'area-15',
    name: 'Outskirts',
    zone: 'secondary',
    responseTime: '12-14 hours',
    description: 'Developing areas on outskirts of Lahore (Raiwind, Sheikhupura road).',
    neighborhoods: ['Raiwind Road', 'Sheikhupura Road', 'Kasur Road', 'Okara Road']
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
