import image from '/services/card-equipment-repairs.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const equipmentRepairsData: ServiceDetailData = {
  breadcrumbLabel: 'Equipment Repairs',
  heroHeading: (
    <>
      Equipment
      <br />
      Repairs
    </>
  ),
  heroDescription: 'We provide professional repair, refurbishment, and overhaul services that restore equipment performance and extend operational life.',
  overviewHeading: (
    <>
      Professional Repair &amp;
      <br />
      Overhaul Services
    </>
  ),
  overviewParagraphs: [
    'We provide professional repair, refurbishment, and overhaul services that restore equipment performance and extend operational life.',
    'Our workshops and field technicians combine mechanical expertise with rigorous testing and certification to return equipment to service with confidence.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Technician repairing production equipment',
  capabilitiesHeading: 'Equipment Repair Capabilities',
  capabilities: [
    { title: 'Rotating Equipment Repairs', description: 'Repair and restoration of pumps, compressors, and other rotating machinery.' },
    { title: 'Valve Refurbishment', description: 'Refurbishment services that restore valve performance and sealing integrity.' },
    { title: 'Pump Repairs', description: 'Diagnostic and repair services that extend pump operational life.' },
    { title: 'Mechanical Overhauls', description: 'Complete mechanical overhauls that restore equipment to original performance.' },
    { title: 'Equipment Testing', description: 'Rigorous testing that verifies equipment is fit for return to service.' },
    { title: 'Certification', description: 'Certification services that confirm equipment meets required standards.' },
  ],
  whyChooseUsHeading: 'Restoring Equipment Performance',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Restore Your Equipment
      <br />
      Performance Today
    </>
  ),
  ctaDescription: 'From rotating equipment repairs to certification, we help you extend the operational life of your critical assets.',
};
