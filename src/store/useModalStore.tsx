import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ModalOpenState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useModalStore = create<ModalOpenState>()(
  persist(
    (set) => ({
      isOpen: false,
      openModal: () => set((state) => ({ isOpen: true })),
      closeModal: () => set((state) => ({ isOpen: false })),
    }),
    { name: 'modal-store' },
  ),
);

export default useModalStore;
