import { create } from 'zustand';

interface HealthState {
  isAuthenticated: boolean;
  user: null | {
    id: string;
    name: string;
    email: string;
  };
  setUser: (user: any) => void;
  logout: () => void;
}

export const useStore = create<HealthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));