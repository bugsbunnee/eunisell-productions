import image from '/services/card-sand-management.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const sandManagementData: ServiceDetailData = {
  breadcrumbLabel: 'Sand Management',
  heroHeading: (
    <>
      Sand
      <br />
      Management
    </>
  ),
  heroDescription: 'Sand production can significantly affect equipment performance, production efficiency, and asset integrity.',
  overviewHeading: (
    <>
      Controlling Sand,
      <br />
      Protecting Production
    </>
  ),
  overviewParagraphs: [
    'Sand production can significantly affect equipment performance, production efficiency, and asset integrity.',
    'Our sand management solutions help operators control solids production while minimizing equipment damage and production losses, particularly in challenging and unconsolidated reservoirs.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Sand management equipment on a production site',
  capabilitiesHeading: 'Sand Management Solutions',
  capabilities: [
    { title: 'Sand Monitoring', description: 'Real-time monitoring systems that detect sand production before it damages equipment.' },
    { title: 'Desanders', description: 'Desanding equipment that removes solids from the production stream.' },
    { title: 'Sand Separation Systems', description: 'Engineered separation systems that protect downstream equipment from erosion.' },
    { title: 'Sand Handling Equipment', description: 'Equipment for safe handling and disposal of produced sand.' },
    { title: 'Flow Assurance Support', description: 'Solutions that maintain reliable flow in sand-prone wells.' },
    { title: 'Production Optimization', description: 'Optimization support that balances production rates with sand control.' },
  ],
  whyChooseUsHeading: 'Protecting Assets, Sustaining Output',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Protect Your Assets From
      <br />
      Sand Production
    </>
  ),
  ctaDescription: 'From monitoring to separation systems, we help you control sand production while protecting equipment and maximizing output.',
};
