import image from '/services/card-shutin-reentry.png';
import type { ServiceDetailData } from '../types';
import { DEFAULT_WHY_CHOOSE_US_POINTS } from './shared';

export const shutinWellReentryData: ServiceDetailData = {
  breadcrumbLabel: 'Shut-In Well Re-Entry',
  heroHeading: (
    <>
      Shut-In Well
      <br />
      Re-Entry
    </>
  ),
  heroDescription:
    'We support operators in safely restoring shut-in wells to production through engineering assessment, equipment refurbishment, intervention planning, and execution.',
  overviewHeading: (
    <>
      Safely Restoring
      <br />
      Shut-In Wells
    </>
  ),
  overviewParagraphs: [
    'We support operators in safely restoring shut-in wells to production through engineering assessment, equipment refurbishment, intervention planning, and execution.',
    'Our approach minimizes operational risks while maximizing production recovery, helping operators unlock value from wells that have been taken out of service.',
  ],
  overviewImage: image,
  overviewImageAlt: 'Field team assessing a shut-in well',
  capabilitiesHeading: 'Shut-In Well Re-Entry Capabilities',
  capabilities: [
    { title: 'Engineering Assessment', description: 'Comprehensive evaluation of well condition and production potential before re-entry.' },
    { title: 'Equipment Refurbishment', description: 'Refurbishment and testing of wellhead and downhole equipment prior to restart.' },
    { title: 'Intervention Planning', description: 'Detailed planning that sequences re-entry activities to minimize operational risk.' },
    { title: 'Well Integrity Verification', description: 'Pressure testing and inspection to confirm well integrity before production resumes.' },
    { title: 'Safe Execution', description: 'Field-supervised execution of re-entry operations under strict HSE protocols.' },
    { title: 'Production Restoration', description: 'Bringing shut-in wells safely back online to maximize recovery.' },
  ],
  whyChooseUsHeading: 'Restoring Production, Minimizing Risk',
  whyChooseUsPoints: DEFAULT_WHY_CHOOSE_US_POINTS,
  ctaHeading: (
    <>
      Bring Your Shut-In Wells
      <br />
      Back Online Safely
    </>
  ),
  ctaDescription: 'From engineering assessment through safe execution, we help you restore shut-in wells to production with minimal risk.',
};
