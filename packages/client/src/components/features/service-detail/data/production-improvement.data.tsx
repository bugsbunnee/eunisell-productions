import image from '/services/card-production-improvement.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const productionImprovementData: ServiceDetailData = {
  breadcrumbLabel: 'Production Improvement',
  heroHeading: (
    <>
      Production
      <br />
      Improvement
    </>
  ),
  heroDescription:
    'We help operators increase production efficiency through engineering interventions, production diagnostics, process optimization, and field improvement initiatives.',
  overviewHeading: (
    <>
      Engineering-Led
      <br />
      Production Improvement
    </>
  ),
  overviewParagraphs: [
    'We help operators increase production efficiency through engineering interventions, production diagnostics, process optimization, and field improvement initiatives.',
    'Our multidisciplinary teams combine reservoir, process, and field engineering expertise to identify practical opportunities that improve output without compromising safety or asset integrity.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Engineers reviewing production performance data',
  capabilitiesHeading: 'Production Improvement Solutions',
  capabilities: [
    { title: 'Production Bottleneck Identification', description: 'Systematic diagnostics to pinpoint constraints limiting production performance.' },
    { title: 'Debottlenecking', description: 'Targeted engineering interventions that remove capacity constraints across the production system.' },
    { title: 'Flow Assurance Support', description: 'Solutions that prevent flow restrictions and maintain reliable hydrocarbon transport.' },
    { title: 'Production Optimization Studies', description: 'Data-driven studies that identify practical opportunities to improve output.' },
    { title: 'Artificial Lift Optimization', description: 'Performance reviews and optimization of artificial lift systems to maximize recovery.' },
    { title: 'Surface Facility Optimization', description: 'Process and equipment improvements that increase facility throughput and efficiency.' },
  ],
  whyChooseUsHeading: 'A Partner in Production Performance',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Improve Your Production
      <br />
      Performance Today
    </>
  ),
  ctaDescription: 'From bottleneck identification through surface facility optimization, we help you unlock additional production safely and efficiently.',
};
