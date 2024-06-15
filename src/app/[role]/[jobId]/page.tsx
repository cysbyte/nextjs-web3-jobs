import { getJobsByJobId } from "@/action/action";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";
import JobDescription from "./job-description";
import JobDetail from "./job-detail";
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
      <JobTitle
        jobTitle={job?.jobTitle || ""}
        companyName={job?.companyName || ""}
      />
      <div className="flex w-full mt-32 gap-10">
        <JobDescription jobDescription={job?.jobDescription || ""} />
        <JobDetail
          locationType={job?.locationType || ""}
          jobType={job?.jobType || ""}
          createdAt={job?.createdAt || new Date()}
          keywords={job?.keywords || ""}
        />
      </div>
      <Footer />
    </main>
  );
};

export default page;
