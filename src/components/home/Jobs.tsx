import { getJobsBySkill, getJobsFromDB } from "@/action/action";
import React, { FC, useState } from "react";
import JobCard from "./job-card";

interface IProps {
  skill?: string;
}

const Jobs = async (props: IProps) => {
  let jobs : any;

  if (props.skill === undefined || props.skill === "") {
    //jobs = await getJobsFromDB();
  } else {
    //jobs = await getJobsBySkill(props.skill);
  }

  console.log(jobs);

  return (
    <section className="container">
      <h4 className="w-full my-10">643 web3 development jobs</h4>

      <div className="w-full h-auto bg-white mt-0">
        {jobs && jobs.map((job: { id: string; jobTitle: string; jobType: string; jobRole: string; locationType: string; jobDescription: string; preferredApplicantLocation: string; keywords: string; currency: string; minSalary: number; maxSalary: number; applyType: String; applyUrl: String; applyEmail: String | null; companyName: String | null; } | undefined, index: any) => (
            <div key={job?.id}>
              <JobCard job={job} />
            </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
