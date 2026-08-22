import z from 'zod';

const knowledgeResourceBaseSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required').max(300, 'Keep the description under 300 characters'),
  featured: z
    .union([z.literal('true'), z.literal('false')])
    .optional()
    .transform((value) => value === 'true'),
  status: z.enum(['DRAFT', 'PUBLISHED']),
});

export const knowledgeResourceSchema = knowledgeResourceBaseSchema;
export const updateKnowledgeResourceSchema = knowledgeResourceBaseSchema.partial();

export const knowledgeResourceListQuerySchema = z.object({
  search: z
    .string()
    .optional()
    .transform((value) => (value?.trim() ? value.trim() : undefined)),
  status: z
    .string()
    .optional()
    .transform((value) => (value === 'DRAFT' || value === 'PUBLISHED' ? value : undefined)),
  category: z
    .string()
    .optional()
    .transform((value) => (value && value !== 'ALL' ? value : undefined)),
  sort: z.enum(['asc', 'desc']).default('desc'),
});

export type IKnowledgeResource = z.infer<typeof knowledgeResourceSchema>;
export type IUpdateKnowledgeResource = z.infer<typeof updateKnowledgeResourceSchema>;
export type IKnowledgeResourceListQuery = z.infer<typeof knowledgeResourceListQuerySchema>;
