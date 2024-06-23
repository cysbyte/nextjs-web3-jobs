import { getJobsBySkill, getJobsFromDB } from "@/action/action";
import React, { FC, useState } from "react";
import JobCard from "./job-card";

interface IProps {
  skill?: string;
}

const Jobs = async (props: IProps) => {
  let jobs;

  if (props.skill === undefined || props.skill === "") {
    jobs = await getJobsFromDB();
  } else {
    jobs = await getJobsBySkill(props.skill);
  }

  console.log(jobs);

  return (
    <section className="container">
      <h4 className="w-full my-10">643 mobile development jobs</h4>

      <div className="w-full h-auto bg-white mt-0">
        {jobs.map((job, index) => (
            <div key={job.id}>
              <JobCard job={job} />
            </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
