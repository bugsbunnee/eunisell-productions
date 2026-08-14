import image from '/services/card-installation-1.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const installationCommissioningData: ServiceDetailData = {
  breadcrumbLabel: 'Installation & Commissioning',
  heroHeading: (
    <>
      Installation &amp;
      <br />
      Commissioning
    </>
  ),
  heroDescription:
    'We provide complete installation and commissioning services for production equipment and facilities, ensuring systems are safely installed, thoroughly tested, and fully operational before handover.',
  overviewHeading: (
    <>
      Complete Installation &amp;
      <br />
      Commissioning Services
    </>
  ),
  overviewParagraphs: [
    'We provide complete installation and commissioning services for production equipment and facilities, ensuring systems are safely installed, thoroughly tested, and fully operational before handover.',
    'Our multidisciplinary field teams manage mechanical, electrical, and instrumentation installation end-to-end, minimizing risk and ensuring a smooth transition from construction to operations.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Field technicians installing production equipment',
  capabilitiesHeading: 'Installation & Commissioning Capabilities',
  capabilities: [
    { title: 'Mechanical Installation', description: 'Precise installation of process equipment, rotating machinery, and structural components.' },
    { title: 'Electrical Installation', description: 'Safe, code-compliant installation of power distribution and control systems.' },
    { title: 'Instrumentation Installation', description: 'Accurate installation and calibration of field instrumentation and control devices.' },
    { title: 'Functional Testing', description: 'Comprehensive testing to verify system functionality before handover.' },
    { title: 'System Commissioning', description: 'Structured commissioning that confirms equipment is ready for safe operation.' },
    { title: 'Start-Up & Performance Verification', description: 'Hands-on start-up support and performance verification to confirm design intent.' },
  ],
  whyChooseUsHeading: 'Reliable Installation Partner',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Install &amp; Commission Your
      <br />
      Next Project With Confidence
    </>
  ),
  ctaDescription: 'From mechanical installation through start-up support, we provide practical solutions built around safety, quality, and operational excellence.',
};
