import { zustandStorageHandler } from '@utils/storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthActions {
  clearTokens: () => void;
  setTokens: (tokens: AuthState) => void;
}

export const useUserAuthenticated = () => useAuthStore(state => Boolean(state.accessToken));

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    immer(set => ({
      accessToken: null,
      refreshToken: null,
      setTokens: tokens => set({ ...tokens }),
      clearTokens: () => set({ accessToken: null, refreshToken: null }),
    })),
    { name: 'token-storage', storage: createJSONStorage(() => zustandStorageHandler) },
  ),
);
