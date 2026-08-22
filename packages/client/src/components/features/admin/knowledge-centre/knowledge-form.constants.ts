import { z } from 'zod';

// Cloudinary's account hard-caps `raw` resource uploads at exactly 1,048,576 bytes (1MB),
// in both signed and unsigned mode, regardless of preset config. Cap comfortably below that
// until the account/plan-level limit is resolved with Cloudinary.
export const KNOWLEDGE_RESOURCE_FILE_MAX_BYTES = 1000 * 1024;

export const CATEGORY_OPTIONS = [
  'Corporate',
  'Engineering Services',
  'Equipment Solutions',
  'HSEQ',
  'Operations & Maintenance',
  'Production Enhancement',
  'Production Facilities',
  'Water Solutions',
  'Well Testing',
];

export const knowledgeResourceFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.string().min(1, 'Choose a category'),
  description: z.string().min(1, 'Description is required').max(300, 'Keep the description under 300 characters'),
  featured: z.boolean(),
  status: z.enum(['DRAFT', 'PUBLISHED']),
});

export type KnowledgeResourceFormValues = z.infer<typeof knowledgeResourceFormSchema>;

export const KNOWLEDGE_RESOURCE_FORM_DEFAULT_VALUES: KnowledgeResourceFormValues = {
  title: '',
  category: '',
  description: '',
  featured: false,
  status: 'DRAFT',
};
