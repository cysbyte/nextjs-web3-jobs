import { getJobsFromDB } from "@/action/action";
import React, { FC, useState } from "react";
import JobCard from "./job-card";

const Jobs = async () => {

  const jobs = await getJobsFromDB()
  console.log(jobs)

  return (
    <section className="">
      <h4 className="w-full my-10">643 mobile development jobs</h4>

      <div className="w-full h-auto bg-white mt-0">
        {jobs.map((job, index) => (<>
          <JobCard key={job.id} job={job} />       
        </>))}

      </div>
    </section>
  );
};

export default Jobs;
