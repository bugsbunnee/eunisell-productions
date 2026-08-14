import type { ReactNode } from 'react';
import type { Capability } from './key-capabilities';
import type { WhyChooseUsPoint } from './why-choose-us';

export interface ServiceDetailData {
  breadcrumbLabel: string;
  heroHeading: ReactNode;
  heroDescription: string;
  overviewHeading: ReactNode;
  overviewParagraphs: string[];
  overviewImage: string;
  overviewImageAlt: string;
  capabilitiesHeading: string;
  capabilities: Capability[];
  whyChooseUsHeading: string;
  whyChooseUsPoints: WhyChooseUsPoint[];
  ctaHeading: ReactNode;
  ctaDescription: string;
}
