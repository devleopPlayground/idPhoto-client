import { create } from 'zustand';

type Toast = { id: number; content: React.ReactNode };

type ToastStoreType = {
  toasts: Toast[];
  showToast: (content: React.ReactNode) => void;
};

const useToastStore = create<ToastStoreType>((set) => ({
  toasts: [],
  showToast: (content) => {
    const id = Date.now();

    set((state) => {
      if (state.toasts.length >= 3) return state;
      return { toasts: [...state.toasts, { id, content }] };
    });

    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }));
    }, 2500);
  },
}));

export default useToastStore;
