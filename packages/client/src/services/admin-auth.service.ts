import http from './http';
import type { AdminUser } from '../stores/auth.store';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: AdminUser;
}

const adminAuthService = {
  login(payload: LoginPayload) {
    return http.post<LoginResponse>('/api/v1/auth/login', payload).then((res) => res.data);
  },
};

export default adminAuthService;
