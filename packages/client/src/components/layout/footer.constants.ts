import { paths } from '../../lib/data';

export const companyLinks = [
  { label: 'About Us', path: paths.about },
  { label: 'Management Team', path: paths.about },
  { label: 'Our Story', path: paths.about },
  { label: 'News & Insights', path: paths.about },
  { label: 'Corporate Social Responsibility', path: paths.csr },
];

export const serviceLinks = [
  { label: 'Engineering, Procurement & Construction', path: paths.epc },
  { label: 'Production Facilities', path: paths.services },
  { label: 'Installation & Commissioning', path: paths.services },
  { label: 'Engineering Design', path: paths.services },
  { label: 'Production Improvement', path: paths.services },
  { label: 'Well Testing', path: paths.wellTesting },
  { label: 'Wellhead Maintenance', path: paths.services },
  { label: 'Operations & Maintenance', path: paths.services },
  { label: 'Shut-in Well Re-entry', path: paths.services },
  { label: 'Equipment Supply', path: paths.services },
  { label: 'Equipment Rentals', path: paths.services },
  { label: 'Equipment Repairs', path: paths.services },
  { label: 'Produced Water Management', path: paths.services },
  { label: 'Sand Management', path: paths.services },
];

export const industryLinks = ['Upstream Oil & Gas', 'International Oil Companies', 'Independent Operators', 'Marginal Field Operators', 'Production Engineering'];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/eunisell/',
  x: 'https://x.com/eunisellltd',
};

export const legalLinks: { label: string; path?: string }[] = [
  { label: 'Privacy Policy' },
  { label: 'Terms of Use' },
  { label: 'HSEQ Policy', path: paths.hseq },
  { label: 'Cookie Settings' },
];
