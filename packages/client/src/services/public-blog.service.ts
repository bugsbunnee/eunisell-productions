import http from './http';

export interface PublicBlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  coverImage: string;
  featured: boolean;
  publishedAt: string | null;
  createdAt: string;
}

export interface PublicBlogListParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  sort?: 'asc' | 'desc';
}

export interface PublicBlogListResponse {
  data: PublicBlogPost[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const publicBlogService = {
  list(params: PublicBlogListParams) {
    return http.get<PublicBlogListResponse>('/api/v1/public/blog', { params }).then((res) => res.data);
  },

  featured() {
    return http.get<{ data: PublicBlogPost | null }>('/api/v1/public/blog/featured').then((res) => res.data.data);
  },

  categories() {
    return http.get<{ data: string[] }>('/api/v1/public/blog/categories').then((res) => res.data.data);
  },
};

export default publicBlogService;
