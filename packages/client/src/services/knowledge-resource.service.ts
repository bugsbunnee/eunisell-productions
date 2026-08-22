import http from './http';
import type { KnowledgeResourceFormValues } from '../components/features/admin/knowledge-centre/knowledge-form.constants';

export type KnowledgeResourceStatus = 'DRAFT' | 'PUBLISHED';

export interface KnowledgeResource {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  coverImageId: string | null;
  file: string;
  fileId: string | null;
  fileType: string;
  fileSizeBytes: number;
  featured: boolean;
  status: KnowledgeResourceStatus;
  publishedAt: string | null;
  authorId: string | null;
  author: { firstName: string; lastName: string } | null;
  createdAt: string;
  updatedAt: string;
}

export interface KnowledgeResourceListParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: KnowledgeResourceStatus | 'ALL';
  category?: string;
  sort?: 'asc' | 'desc';
}

export interface KnowledgeResourceListResponse {
  data: KnowledgeResource[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface KnowledgeResourceStats {
  total: number;
  published: number;
  draft: number;
}

const buildFormData = (values: KnowledgeResourceFormValues, coverImage?: File | null, file?: File | null) => {
  const formData = new FormData();

  formData.append('title', values.title);
  formData.append('category', values.category);
  formData.append('description', values.description);
  formData.append('featured', String(values.featured));
  formData.append('status', values.status);
  if (coverImage) formData.append('coverImage', coverImage);
  if (file) formData.append('file', file);

  return formData;
};

const knowledgeResourceService = {
  list(params: KnowledgeResourceListParams) {
    return http.get<KnowledgeResourceListResponse>('/api/v1/knowledge-resources', { params }).then((res) => res.data);
  },

  stats() {
    return http.get<KnowledgeResourceStats>('/api/v1/knowledge-resources/stats').then((res) => res.data);
  },

  get(id: string) {
    return http.get<KnowledgeResource>(`/api/v1/knowledge-resources/${id}`).then((res) => res.data);
  },

  create(values: KnowledgeResourceFormValues, coverImage: File, file: File) {
    return http.post<KnowledgeResource>('/api/v1/knowledge-resources', buildFormData(values, coverImage, file)).then((res) => res.data);
  },

  update(id: string, values: KnowledgeResourceFormValues, coverImage?: File | null, file?: File | null) {
    return http.put<KnowledgeResource>(`/api/v1/knowledge-resources/${id}`, buildFormData(values, coverImage, file)).then((res) => res.data);
  },

  remove(id: string) {
    return http.delete(`/api/v1/knowledge-resources/${id}`);
  },
};

export default knowledgeResourceService;
