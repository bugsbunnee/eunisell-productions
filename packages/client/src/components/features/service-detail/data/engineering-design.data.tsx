import image from '/services/card-engineering-design.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const engineeringDesignData: ServiceDetailData = {
  breadcrumbLabel: 'Engineering Design',
  heroHeading: (
    <>
      Engineering Design
      <br />
      (FEED &amp; DED)
    </>
  ),
  heroDescription:
    'Our engineering team develops robust Front-End Engineering Design (FEED) and Detailed Engineering Design (DED) packages that reduce project risk, improve constructability, and optimize capital investment.',
  overviewHeading: (
    <>
      Robust FEED &amp; DED
      <br />
      Engineering Packages
    </>
  ),
  overviewParagraphs: [
    'Our engineering team develops robust Front-End Engineering Design (FEED) and Detailed Engineering Design (DED) packages that reduce project risk, improve constructability, and optimize capital investment.',
    'By combining multidisciplinary engineering expertise with rigorous design verification, we help operators move from concept to execution with confidence, minimizing costly rework and schedule delays.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Engineer reviewing design drawings',
  capabilitiesHeading: 'Engineering Disciplines',
  capabilities: [
    { title: 'Process Engineering', description: 'Process flow diagrams, mass and energy balances, and P&IDs that define system performance.' },
    { title: 'Mechanical Engineering', description: 'Equipment sizing, material selection, and mechanical design for process systems.' },
    { title: 'Piping Engineering', description: 'Piping design, stress analysis, and layout optimization for safe, efficient routing.' },
    { title: 'Civil & Structural Engineering', description: 'Foundation, structural, and site layout design for production facilities.' },
    { title: 'Electrical & Instrumentation Engineering', description: 'Power distribution, control systems, and field instrumentation design.' },
    { title: 'HAZOP & Design Verification', description: 'Structured hazard reviews and design checks that reduce project and operational risk.' },
  ],
  whyChooseUsHeading: 'Trusted Engineering Partner',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Engineer Your Next Project
      <br />
      With Confidence
    </>
  ),
  ctaDescription: 'From FEED through detailed design, we provide practical engineering solutions built around safety, quality, and operational excellence.',
};
