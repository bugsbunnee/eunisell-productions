import axios from 'axios';
import { useAuthStore } from '../stores/auth.store';
import { adminPaths } from '../lib/data';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.set('x-auth-token', token);
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      useAuthStore.getState().logout();
      if (window.location.pathname !== adminPaths.login) window.location.href = adminPaths.login;
    }

    return Promise.reject(error);
  }
);

export default http;
