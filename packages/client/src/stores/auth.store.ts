import { create } from 'zustand';
import { persist, createJSONStorage, type StateStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';

export interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  token: string | null;
  admin: AdminUser | null;
  setAuth: (token: string, admin: AdminUser) => void;
  logout: () => void;
}

const cookieStorage: StateStorage = {
  getItem: (name) => Cookies.get(name) ?? null,
  setItem: (name, value) => Cookies.set(name, value, { expires: 7, sameSite: 'strict' }),
  removeItem: (name) => Cookies.remove(name),
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      admin: null,
      setAuth: (token, admin) => set({ token, admin }),
      logout: () => set({ token: null, admin: null }),
    }),
    {
      name: 'eunisell-admin-auth',
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);
