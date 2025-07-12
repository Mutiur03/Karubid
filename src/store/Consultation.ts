import { create } from "zustand";

interface ConsultationStore {
  isOpen: boolean;
  openConsultation: () => void;
  closeConsultation: () => void;
}

const useConsultationStore = create<ConsultationStore>((set) => ({
  isOpen: false,
  openConsultation: () => set({ isOpen: true }),
  closeConsultation: () => set({ isOpen: false }),
}));

export default useConsultationStore;
