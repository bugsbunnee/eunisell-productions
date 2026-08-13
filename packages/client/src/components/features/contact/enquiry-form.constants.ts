import { z } from 'zod';

export const SERVICES = [
  'Well Testing',
  'Production Facilities',
  'Operations & Maintenance',
  'Water Solutions',
  'Production Enhancement',
  'Equipment Solutions',
  'Engineering Services',
] as const;

export const COUNTRIES = ['Nigeria', 'Ghana', 'Angola', 'Côte d’Ivoire', 'Equatorial Guinea', 'Other'] as const;

export const PROJECT_STAGES = ['Concept/Pre-FEED', 'FEED', 'Detailed Engineering', 'Construction', 'Commissioning', 'Operations'] as const;

export const ENQUIRY_FORM_DEFAULT_VALUES = {
  country: 'Nigeria',
  serviceOfInterest: 'Well Testing',
  projectStage: 'Concept/Pre-FEED',
} as const;

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required'),
  companyName: z.string().trim().min(1, 'Company name is required'),
  jobTitle: z.string().trim().optional(),
  email: z.string().trim().min(1, 'Email address is required').email('Enter a valid email address'),
  phone: z.string().trim().optional(),
  country: z.enum(COUNTRIES),
  serviceOfInterest: z.enum(SERVICES, { message: 'Select a service of interest' }),
  projectLocation: z.string().trim().optional(),
  projectStage: z.enum(PROJECT_STAGES),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Please provide a bit more detail (min. 10 characters)'),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;

export const INPUT_CLASSNAME =
  'w-full bg-surface border border-line rounded-xl h-14 px-5 text-base font-light text-accent placeholder:text-placeholder outline-none focus:border-secondary transition-colors';
export const LABEL_CLASSNAME = 'font-light text-accent text-sm leading-5.25';
export const ERROR_CLASSNAME = 'text-xs text-destructive';
