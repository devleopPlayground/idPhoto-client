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
      openModal: () => set({ isOpen: true }),
      closeModal: () => set({ isOpen: false }),
    }),
    { name: 'modal-store', skipHydration: true },
  ),
);

export default useModalStore;
