import http from './http';

export type ActivityAction = 'login' | 'created' | 'updated' | 'deleted';
export type ActivityCategory = 'auth' | 'blog';

export interface ActivityEntry {
  id: string;
  action: ActivityAction;
  category: ActivityCategory;
  description: string;
  createdAt: string;
}

export interface ActivityListResponse {
  data: ActivityEntry[];
}

const activityService = {
  recent(limit = 8) {
    return http.get<ActivityListResponse>('/api/v1/activity/recent', { params: { limit } }).then((res) => res.data.data);
  },
};

export default activityService;
