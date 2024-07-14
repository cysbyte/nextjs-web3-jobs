import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EmailMessageState {
  message: string;

  setMessage: (value: string) => void;
}

export const useEmailMessage = create<EmailMessageState>()(
  persist(
    (set) => ({
      message: "",

      setMessage: (value: string) => {
        set((state) => {
          if (state.message === "") {
            return { message: value };
          }
          return state;
        });
      },
    }),
    {
      name: "emailMessageStore",
    }
  )
);
