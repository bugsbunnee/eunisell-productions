import image from '/services/card-wellhead-maintenance.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const wellheadMaintenanceData: ServiceDetailData = {
  breadcrumbLabel: 'Wellhead Maintenance',
  heroHeading: (
    <>
      Wellhead
      <br />
      Maintenance
    </>
  ),
  heroDescription:
    'Reliable wellhead systems are critical to safe production. Our experienced field teams perform preventive and corrective maintenance to maintain equipment integrity and operational reliability.',
  overviewHeading: (
    <>
      Reliable Wellhead
      <br />
      Maintenance Services
    </>
  ),
  overviewParagraphs: [
    'Reliable wellhead systems are critical to safe production. Our experienced field teams perform preventive and corrective maintenance to maintain equipment integrity and operational reliability.',
    'Eunisell provides complete wellhead solutions to support safe and efficient hydrocarbon production from the point of reservoir access, backed by technicians and engineers experienced across all major wellhead and valve systems.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Technician performing wellhead maintenance',
  capabilitiesHeading: 'Our Wellhead Capabilities',
  capabilities: [
    { title: 'Wellhead Installation & Maintenance', description: 'Installation and preventive/corrective maintenance of casing heads, tubing heads, and Christmas trees.' },
    { title: 'Well Integrity Management', description: 'Leak detection, annulus pressure monitoring, corrosion control, and scale inhibition.' },
    { title: 'Pressure Control Solutions', description: 'Emergency shut-down systems, BOP support, and valve integrity management.' },
    { title: 'Surface Testing & Flowback', description: 'Function and pressure testing of valves, chokes, and actuators to confirm integrity.' },
    { title: 'Wellhead Equipment Supply', description: 'API-certified valves, chokes, spools, adapters, and flanges with local stocking.' },
    { title: 'Technical Field Expertise', description: 'Experienced technicians supporting Cameron, FMC, Vetco, and Ingram Cactus wellhead systems.' },
  ],
  whyChooseUsHeading: 'Delivering Operational Excellence',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Keep Your Wellheads
      <br />
      Safe &amp; Reliable
    </>
  ),
  ctaDescription: 'From installation through integrity management, our field teams keep your wellhead systems performing safely and reliably.',
};
