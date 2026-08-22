import http from './http';

export interface PublicKnowledgeResource {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  file: string;
  fileType: string;
  fileSizeBytes: number;
  featured: boolean;
  publishedAt: string | null;
  createdAt: string;
}

export interface PublicKnowledgeResourceListParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}

export interface PublicKnowledgeResourceListResponse {
  data: PublicKnowledgeResource[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const publicKnowledgeResourceService = {
  list(params: PublicKnowledgeResourceListParams) {
    return http.get<PublicKnowledgeResourceListResponse>('/api/v1/public/knowledge-resources', { params }).then((res) => res.data);
  },

  featured() {
    return http.get<{ data: PublicKnowledgeResource | null }>('/api/v1/public/knowledge-resources/featured').then((res) => res.data.data);
  },

  categories() {
    return http.get<{ data: string[] }>('/api/v1/public/knowledge-resources/categories').then((res) => res.data.data);
  },
};

export default publicKnowledgeResourceService;
