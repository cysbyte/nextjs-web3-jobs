import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AccountOptionState {
  option: string;

  setOption: (value: string) => void;
}

export const useAccountOption = create<AccountOptionState>((set) => ({
  option: "Talent profile",

  setOption: (value: string) => {
    set((state) => {
        return { option: value };
    });
  },
}));