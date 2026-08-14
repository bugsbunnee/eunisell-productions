import image from '/services/card-produced-water.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const producedWaterManagementData: ServiceDetailData = {
  breadcrumbLabel: 'Produced Water Management',
  heroHeading: (
    <>
      Produced Water
      <br />
      Management
    </>
  ),
  heroDescription: 'Produced water handling is a critical component of environmentally responsible production.',
  overviewHeading: (
    <>
      Integrated Produced
      <br />
      Water Management
    </>
  ),
  overviewParagraphs: [
    'Produced water handling is a critical component of environmentally responsible production. Eunisell provides integrated produced water management solutions that improve treatment efficiency, ensure regulatory compliance, and reduce environmental impact.',
    'From treatment to water injection, we combine advanced technologies, chemical expertise, and field-proven operational practices to help operators manage water efficiently while optimizing overall production performance.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Produced water treatment facility',
  capabilitiesHeading: 'Produced Water Capabilities',
  capabilities: [
    { title: 'Produced Water Treatment', description: 'Primary, secondary, and tertiary treatment systems that prepare produced water for discharge or reuse.' },
    { title: 'Water Injection Solutions', description: 'Water sourcing, pretreatment, and injection systems that support enhanced oil recovery.' },
    { title: 'Solids & Contaminant Removal', description: 'Sand handling, desanding, and removal of trace contaminants to protect equipment.' },
    { title: 'Injection System Integrity', description: 'Corrosion and scale inhibition programs that protect pipelines and tubulars.' },
    { title: 'Environmental Compliance', description: 'Treatment and monitoring that meets Nigerian and international regulatory standards.' },
    { title: 'Water Quality Monitoring', description: 'Continuous monitoring and sampling that demonstrates ongoing compliance.' },
  ],
  whyChooseUsHeading: 'Responsible Water Management',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Manage Produced Water
      <br />
      Efficiently &amp; Compliantly
    </>
  ),
  ctaDescription: 'From treatment to injection, we help operators manage produced water while maintaining regulatory compliance and asset integrity.',
};
