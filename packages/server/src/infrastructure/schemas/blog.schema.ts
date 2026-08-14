import z from 'zod';

const blogPostBaseSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers, and hyphens only'),
  category: z.string().min(1, 'Category is required'),
  excerpt: z.string().min(1, 'Excerpt is required').max(300, 'Keep the excerpt under 300 characters'),
  content: z.string().min(1, 'Content is required'),
  readTime: z.string().min(1, 'Read time is required'),
  featured: z
    .union([z.literal('true'), z.literal('false')])
    .optional()
    .transform((value) => value === 'true'),
  status: z.enum(['DRAFT', 'PUBLISHED']),
});

export const blogPostSchema = blogPostBaseSchema;
export const updateBlogPostSchema = blogPostBaseSchema.partial();

export const blogListQuerySchema = z.object({
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

export type IBlogPost = z.infer<typeof blogPostSchema>;
export type IUpdateBlogPost = z.infer<typeof updateBlogPostSchema>;
export type IBlogListQuery = z.infer<typeof blogListQuerySchema>;
