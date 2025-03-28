import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ModalStoreType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useModalStore = create<ModalStoreType>()(
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
