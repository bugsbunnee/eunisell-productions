import http from './http';
import type { BlogFormValues } from '../components/features/admin/blog/blog-form.constants';

export type BlogStatus = 'DRAFT' | 'PUBLISHED';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  coverImage: string;
  coverImageId: string | null;
  featured: boolean;
  status: BlogStatus;
  publishedAt: string | null;
  authorId: string | null;
  author: { firstName: string; lastName: string } | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogListParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: BlogStatus | 'ALL';
  category?: string;
  sort?: 'asc' | 'desc';
}

export interface BlogListResponse {
  data: BlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BlogStats {
  total: number;
  published: number;
  draft: number;
  recentActivity: { id: string; title: string; status: BlogStatus; createdAt: string; updatedAt: string }[];
  monthlyPosts: { month: string; posts: number }[];
  monthlyBreakdown: { month: string; published: number; draft: number }[];
  categoryBreakdown: { category: string; count: number }[];
}

const buildFormData = (values: BlogFormValues, coverImage?: File | null) => {
  const formData = new FormData();

  formData.append('title', values.title);
  formData.append('slug', values.slug);
  formData.append('category', values.category);
  formData.append('excerpt', values.excerpt);
  formData.append('content', values.content);
  formData.append('readTime', values.readTime);
  formData.append('featured', String(values.featured));
  formData.append('status', values.status);
  if (coverImage) formData.append('coverImage', coverImage);

  return formData;
};

const blogService = {
  list(params: BlogListParams) {
    return http.get<BlogListResponse>('/api/v1/blog', { params }).then((res) => res.data);
  },

  stats() {
    return http.get<BlogStats>('/api/v1/blog/stats').then((res) => res.data);
  },

  get(id: string) {
    return http.get<BlogPost>(`/api/v1/blog/${id}`).then((res) => res.data);
  },

  create(values: BlogFormValues, coverImage: File) {
    return http.post<BlogPost>('/api/v1/blog', buildFormData(values, coverImage)).then((res) => res.data);
  },

  update(id: string, values: BlogFormValues, coverImage?: File | null) {
    return http.put<BlogPost>(`/api/v1/blog/${id}`, buildFormData(values, coverImage)).then((res) => res.data);
  },

  remove(id: string) {
    return http.delete(`/api/v1/blog/${id}`);
  },
};

export default blogService;
