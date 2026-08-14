import image from '/services/card-production-facilities.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const productionFacilitiesData: ServiceDetailData = {
  breadcrumbLabel: 'Production Facilities',
  heroHeading: (
    <>
      Production
      <br />
      Facilities
    </>
  ),
  heroDescription: 'Eunisell designs, upgrades, maintains, and supports oil and gas production facilities to ensure safe and efficient processing operations.',
  overviewHeading: (
    <>
      Unlocking Value Sooner With
      <br />
      Production Facilities
    </>
  ),
  overviewParagraphs: [
    'Eunisell designs, upgrades, maintains, and supports oil and gas production facilities to ensure safe and efficient processing operations, including flow stations, Early Production Facilities (EPF), and separation systems.',
    'Our Early Production Facilities offering enables operators to bring hydrocarbon assets online swiftly, cost-effectively, and safely — bypassing the long lead times associated with conventional full-scale infrastructure development.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Modular oil and gas production facility',
  capabilitiesHeading: 'Production Facilities Capabilities',
  capabilities: [
    { title: 'Early Production Facilities (EPF)', description: 'Rapid-deployment modular systems that bring hydrocarbon assets online swiftly, cost-effectively, and safely.' },
    { title: 'Flow Stations & Process Skids', description: 'Design, upgrade, and support of flow stations and skid-mounted process systems.' },
    { title: 'Two & Three-Phase Separation', description: 'High-efficiency separators engineered for reliable oil, gas, and water separation.' },
    { title: 'Test & Production Separators', description: 'Accurate well test measurement and continuous bulk separation systems.' },
    { title: 'Utility & Storage Systems', description: 'Supporting utility systems and storage facilities that keep production running safely.' },
    { title: 'Build, Own & Operate (BOO)', description: 'Full lifecycle ownership options for operators seeking a capital-efficient delivery model.' },
  ],
  whyChooseUsHeading: 'Speed To Market, Built To Last',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Bring Your Production
      <br />
      Facility Online Faster
    </>
  ),
  ctaDescription: 'From Early Production Facilities to full-scale processing systems, we help you get hydrocarbons to market faster and smarter.',
};
