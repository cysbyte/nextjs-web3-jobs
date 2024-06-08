import React, { FC, useState } from "react";
import JobCard from "./JobCard";

const Jobs: FC = () => {
  return (
    <section className="">
      <h4 className="w-full my-10">643 mobile development jobs</h4>

      <div className="w-full h-auto bg-white mt-0">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </section>
  );
};

export default React.memo(Jobs);
