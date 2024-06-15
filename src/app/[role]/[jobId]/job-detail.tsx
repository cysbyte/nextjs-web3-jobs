import React from "react";

interface IProps {
  locationType: string;
  jobType: string;
  createdAt: Date;
  keywords: string;
}

const JobDetail = (props: IProps) => {
  return (
    <div className="basis-1/3 flex flex-col gap-6 text-gray-500">
      <div>
        <p>JOB LOCATION</p>
        <p className="mt-2 text-gray-800">{props.locationType}</p>
      </div>
      <div>
        <p>JOB TYPE</p>
        <p className="mt-2 text-gray-800">{props.jobType}</p>
      </div>
      <div>
        <p>TIME POSTED</p>
        <p className="mt-2 text-gray-800">{props.createdAt.toISOString()}</p>
      </div>
      <div>
        <p>KEYWORDS</p>
        <p className="mt-2 text-gray-800">{props.keywords.replaceAll(',', ', ')}</p>
      </div>

      <button className="py-3 px-24 mt-5 w-fit text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-purple-500 text-white active:scale-100 duration-300 border border-purple-500 rounded-md">Apply</button>
    </div>
  );
};

export default JobDetail;
