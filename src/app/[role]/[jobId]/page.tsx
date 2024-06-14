import { getJobsByJobId } from "@/action/action";
import Header from "@/components/layout/header";
import React from "react";
import JobDescription from "./job-description";
import JobTitle from "./job-title";

const page = async ({
  params,
}: {
  params: { role: string; jobId: string };
}) => {
  const job = await getJobsByJobId(params.jobId);
  return (
    <main className="container">
          <Header />
          <JobTitle jobTitle={job?.jobTitle || ''} companyName={job?.companyName || ''} />
          <div className="flex w-full mt-32">
              <JobDescription jobDescription={job?.jobDescription||''} />
          </div>
    </main>
  );
};

export default page;
