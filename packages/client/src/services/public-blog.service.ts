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

export interface PublicBlogPostDetail extends Omit<PublicBlogPost, 'featured'> {
  content: string;
  author: { firstName: string; lastName: string } | null;
}

export interface PublicBlogPostWithRelated {
  post: PublicBlogPostDetail;
  related: Omit<PublicBlogPost, 'featured'>[];
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

  get(slug: string) {
    return http
      .get<{ data: PublicBlogPostDetail; related: Omit<PublicBlogPost, 'featured'>[] }>(`/api/v1/public/blog/${slug}`)
      .then((res) => ({ post: res.data.data, related: res.data.related }));
  },
};

export default publicBlogService;
