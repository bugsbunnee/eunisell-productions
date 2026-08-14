import image from '/services/card-equipment-rentals.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const equipmentRentalsData: ServiceDetailData = {
  breadcrumbLabel: 'Equipment Rentals',
  heroHeading: (
    <>
      Equipment
      <br />
      Rentals
    </>
  ),
  heroDescription: 'Our equipment rental solutions provide operators with flexible access to critical production equipment without significant capital investment.',
  overviewHeading: (
    <>
      Flexible Access to
      <br />
      Critical Equipment
    </>
  ),
  overviewParagraphs: [
    'Our equipment rental solutions provide operators with flexible access to critical production equipment without significant capital investment.',
    'From test separators to generators, our rental fleet helps operators respond quickly to operational needs while managing capital expenditure.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Production equipment available for rental',
  capabilitiesHeading: 'Equipment Available for Rental',
  capabilities: [
    { title: 'Test Separators', description: 'Rental test separators for accurate well production measurement.' },
    { title: 'Pumps', description: 'Flexible access to production and process pumps without capital investment.' },
    { title: 'Compressors', description: 'Rental compressors to support gas handling and production requirements.' },
    { title: 'Generators', description: 'Reliable power generation equipment for field operations.' },
    { title: 'Well Testing Equipment', description: 'Complete well testing packages available for short or long-term rental.' },
    { title: 'Production Support Equipment', description: 'A broad range of equipment supporting production operations on demand.' },
  ],
  whyChooseUsHeading: 'Flexibility Without Compromise',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Get Flexible Access to
      <br />
      Production Equipment
    </>
  ),
  ctaDescription: 'From test separators to generators, our rental solutions give you the equipment you need without the capital investment.',
};
