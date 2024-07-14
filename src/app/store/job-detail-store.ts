import { FormFields } from "@/components/hire-web3-developers/job-post-form";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface JobDetailState {
  jobDetail: FormFields | null;

  setJobDetail: (value: FormFields) => void;
}

export const useJobDetailStore = create<JobDetailState>()(
  persist(
    (set) => ({
      jobDetail: null,

      setJobDetail: (value: FormFields) => {
        set((state) => {
          if (state.jobDetail == null) {
            return { jobDetail: value };
          }
          return state;
        });
      },
    }),
    {
      name: "jobDetail",
    }
  )
);
