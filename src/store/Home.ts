import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

export interface HomeStore {
  projectsCount: number;
  clientsCount: number;
  experienceCount: number;
  setProjectsCount: (count: number) => void;
  setClientsCount: (count: number) => void;
  setExperienceCount: (count: number) => void;
  resetCounters: () => void;
  incrementCounters: () => void;
}

const useHomeStore = create<HomeStore>()(
  devtools(
    persist(
      (set, get) => ({
        projectsCount: 0,
        clientsCount: 0,
        experienceCount: 0,
        setProjectsCount: (count: number) => set({ projectsCount: count }),
        setClientsCount: (count: number) => set({ clientsCount: count }),
        setExperienceCount: (count: number) => set({ experienceCount: count }),
        resetCounters: () =>
          set({
            projectsCount: 0,
            clientsCount: 0,
            experienceCount: 0,
          }),
        incrementCounters: () => {
          const state = get();
          set({
            projectsCount: state.projectsCount + 1,
            clientsCount: state.clientsCount + 1,
            experienceCount: state.experienceCount + 1,
          });
        },
      }),
      {
        name: "home-storage", // unique name for the storage
      }
    )
  )
);
export default useHomeStore;
