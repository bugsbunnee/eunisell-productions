import image from '/services/card-operations-maintenance.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const operationsMaintenanceData: ServiceDetailData = {
  breadcrumbLabel: 'Operations & Maintenance',
  heroHeading: (
    <>
      Operations &amp;
      <br />
      Maintenance
    </>
  ),
  heroDescription: 'We provide comprehensive operations and maintenance services that improve asset reliability, maximize equipment availability, and reduce unplanned shutdowns.',
  overviewHeading: (
    <>
      Comprehensive Operations
      <br />
      &amp; Maintenance Services
    </>
  ),
  overviewParagraphs: [
    'We provide comprehensive operations and maintenance services that improve asset reliability, maximize equipment availability, and reduce unplanned shutdowns.',
    'Our field teams combine mechanical, electrical, instrumentation, and reliability engineering expertise to keep production systems running safely, efficiently, and within budget.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Technician performing equipment maintenance',
  capabilitiesHeading: 'Operations & Maintenance Services',
  capabilities: [
    { title: 'Production Operations', description: 'Day-to-day operational support that keeps production systems running safely and efficiently.' },
    { title: 'Mechanical Maintenance', description: 'Preventive and corrective maintenance of mechanical process equipment.' },
    { title: 'Electrical & Instrument Maintenance', description: 'Maintenance of power distribution, control systems, and field instrumentation.' },
    { title: 'Rotating Equipment Maintenance', description: 'Specialized maintenance of pumps, compressors, and other rotating machinery.' },
    { title: 'Shutdown Maintenance', description: 'Planned shutdown execution that minimizes downtime and restores asset performance.' },
    { title: 'Reliability Engineering', description: 'Reliability-centered maintenance strategies that reduce unplanned failures.' },
  ],
  whyChooseUsHeading: 'Maximizing Asset Reliability',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Maximize Your Asset
      <br />
      Reliability &amp; Uptime
    </>
  ),
  ctaDescription: 'From daily operations to reliability engineering, we help you reduce unplanned shutdowns and maximize equipment availability.',
};
