import image from '/services/card-equipment-supply.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const equipmentSupplyData: ServiceDetailData = {
  breadcrumbLabel: 'Equipment Supply',
  heroHeading: (
    <>
      Equipment
      <br />
      Supply
    </>
  ),
  heroDescription: 'Through our extensive global partnerships, Eunisell supplies high-quality production equipment from leading international manufacturers.',
  overviewHeading: (
    <>
      Global Partnerships,
      <br />
      Quality Equipment
    </>
  ),
  overviewParagraphs: [
    'Through our extensive global partnerships, Eunisell supplies high-quality production equipment from leading international manufacturers.',
    'From wellhead components to process equipment, we help operators source reliable, certified equipment backed by local stocking and rapid deployment.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Production equipment ready for supply',
  capabilitiesHeading: 'Equipment We Supply',
  capabilities: [
    { title: 'Wellhead Equipment', description: 'Casing heads, tubing heads, Christmas trees, and associated wellhead components.' },
    { title: 'Valves', description: 'API-certified valves sourced from leading international manufacturers.' },
    { title: 'Pumps', description: 'High-quality pumps for production, injection, and process applications.' },
    { title: 'Separators', description: 'Two and three-phase separators for reliable oil, gas, and water separation.' },
    { title: 'Pressure Vessels', description: 'Certified pressure vessels engineered for safe process operation.' },
    { title: 'Instrumentation & Process Equipment', description: 'Field instrumentation and process equipment for production and processing systems.' },
  ],
  whyChooseUsHeading: 'A Trusted Supply Partner',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Source Reliable Equipment
      <br />
      From a Trusted Partner
    </>
  ),
  ctaDescription: 'From wellhead components to process equipment, we help you source high-quality equipment backed by global partnerships.',
};
