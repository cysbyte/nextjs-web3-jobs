import Image from "next/image";
import Link from "next/link";
import React, { FC, useCallback } from "react";
import companyLogo from "/public/company-logo.jpg";
import * as _ from 'lodash'
import { kebabCase } from "lodash";

interface IProps {
  job?: {
    id: string;
    jobTitle: string;
    jobType: string;
    jobRole: string;
    locationType: string;
    jobDescription: string;
    preferredApplicantLocation: string;
    keywords: string;
    currency: string;
    minSalary: number;
    maxSalary: number;
    applyType: String;
    applyUrl: String;
    applyEmail: String | null;
    companyName: String | null;
  };
}

const JobCard: FC<IProps> = ({ job }) => {

  const generateRole = useCallback(() => {
    let role='mobile-jobs'
    if (job?.jobTitle.toLowerCase().includes('android')) {
      role='android-jobs'
    }
    if (job?.jobTitle.toLowerCase().includes('iOS')) {
      role='ios-jobs'
    }
    if (job?.jobTitle.toLowerCase().includes('react')
    && job?.jobTitle.toLowerCase().includes('native')) {
      role='react-native-jobs'
    }
    if (job?.jobTitle.toLowerCase().includes('flutter')) {
      role='flutter-jobs'
    }
    if (job?.jobTitle.toLowerCase().includes('unity')) {
      role='unity-jobs'
    }
    if (job?.jobTitle.toLowerCase().includes('unreal')) {
      role='unreal-engine-jobs'
    }
    return role;
  },[job?.jobTitle])

  return (
    <article className="flex h-auto border-b justify-start items-center bg-slate-50/50">
      <div className="flex gap-5 py-6 w-full">
        <div className="w-auto h-auto">
          <Image
            className=" rounded-full"
            width={40}
            height={40}
            src={companyLogo}
            alt="Company Logo"
          />
        </div>
        <div className="h-auto">
          <Link href={`/${generateRole()}/${kebabCase(job?.companyName+'-'+job?.jobTitle)}`} className=" font-semibold text-[1.5rem] hover:text-purple-500 cursor-pointer">
            {job?.jobTitle}
          </Link>
          <p className=" text-xl hover:text-purple-500 cursor-pointer">
            {job?.companyName}
          </p>
          <div className="flex gap-3 text-base text-gray-500 mt-5">
            <p>{job?.locationType}</p>
            <p>{job?.jobRole}</p>
            <p>{job?.jobType}</p>
            <p>
              {job?.currency.split("-")[0].trim()}
              {job?.minSalary} - {job?.currency.split("-")[0].trim()}
              {job?.maxSalary}
            </p>
          </div>
          <div className="flex gap-3 text-base text-gray-500 mt-2">
            {job?.keywords.split(",").map((item, index) => (
              <div
                key={item}
                className="border px-3 py-1 rounded-md border-gray-400 hover:text-purple-700 hover:border-purple-700 cursor-pointer"
              >
                {item.trim()}
              </div>
            ))}
          </div>
        </div>
        <div className="w-auto h-auto flex-grow flex justify-end">
          <p className="mt-2 mr-2 text-gray-500">Today</p>
        </div>
      </div>
    </article>
  );
};

export default React.memo(JobCard);
