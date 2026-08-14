import { z } from 'zod';

export const CATEGORY_OPTIONS = [
  'Engineering',
  'Equipment',
  'Facilities',
  'HSEQ',
  'Operations & Maintenance',
  'Production Enhancement',
  'Production Operations',
  'Water Solutions',
  'Well Testing',
];

export const blogFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers, and hyphens only'),
  category: z.string().min(1, 'Choose a category'),
  excerpt: z.string().min(1, 'Excerpt is required').max(300, 'Keep the excerpt under 300 characters'),
  content: z.string().min(1, 'Content is required'),
  readTime: z.string().min(1, 'Read time is required'),
  featured: z.boolean(),
  status: z.enum(['DRAFT', 'PUBLISHED']),
});

export type BlogFormValues = z.infer<typeof blogFormSchema>;

export const BLOG_FORM_DEFAULT_VALUES: BlogFormValues = {
  title: '',
  slug: '',
  category: '',
  excerpt: '',
  content: '',
  readTime: '',
  featured: false,
  status: 'DRAFT',
};
