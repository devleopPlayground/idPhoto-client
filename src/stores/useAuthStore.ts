import { ACCESS_TOKEN } from '@/constants/token';
import { LocalStorage } from '@/utils/localStorage';
import { create } from 'zustand';

type UseAuthStoreType = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

const useAuthStore = create<UseAuthStoreType>((set) => ({
  accessToken: LocalStorage.getItem(ACCESS_TOKEN) || null,
  setAccessToken: (token) => set({ accessToken: token }),
}));

export default useAuthStore;
