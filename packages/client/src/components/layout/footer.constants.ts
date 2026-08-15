import { paths } from '../../lib/data';

export const companyLinks = [
  { label: 'About Us', path: paths.about },
  { label: 'Management Team', path: paths.managementTeam },
  { label: 'News & Insights', path: paths.blog },
  { label: 'Corporate Social Responsibility', path: paths.csr },
];

export const serviceLinks = [
  { label: 'Engineering, Procurement & Construction', path: paths.epc },
  { label: 'Production Facilities', path: paths.productionFacilities },
  { label: 'Installation & Commissioning', path: paths.installationCommissioning },
  { label: 'Engineering Design', path: paths.engineeringDesign },
  { label: 'Production Improvement', path: paths.productionImprovement },
  { label: 'Well Testing', path: paths.wellTesting },
  { label: 'Wellhead Maintenance', path: paths.wellheadMaintenance },
  { label: 'Operations & Maintenance', path: paths.operationsMaintenance },
  { label: 'Shut-in Well Re-entry', path: paths.shutinWellReentry },
  { label: 'Equipment Supply', path: paths.equipmentSupply },
  { label: 'Equipment Rentals', path: paths.equipmentRentals },
  { label: 'Equipment Repairs', path: paths.equipmentRepairs },
  { label: 'Produced Water Management', path: paths.producedWaterManagement },
  { label: 'Sand Management', path: paths.sandManagement },
];

export const industryLinks = ['Upstream Oil & Gas', 'International Oil Companies', 'Independent Operators', 'Marginal Field Operators', 'Production Engineering'];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/eunisell/',
  x: 'https://x.com/eunisellltd',
};

export const legalLinks: { label: string; path?: string }[] = [
  { label: 'Privacy Policy', path: paths.privacy },
  { label: 'Terms of Use', path: paths.privacy },
  { label: 'HSEQ Policy', path: paths.hseq },
  { label: 'Cookie Settings', path: paths.privacy },
];
