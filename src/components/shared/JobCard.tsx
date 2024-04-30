import Image from "next/image";
import React from "react";
import companyLogo from "/public/company-logo.jpg";

const JobCard = () => {
  return (
    <div className="flex h-auto px-10 border-b justify-start items-center bg-slate-50/50">
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
          <h2 className=" font-semibold text-[1.5rem] hover:text-purple-500 cursor-pointer">Senior Android Engineer</h2>
          <p className=" text-xl hover:text-purple-500 cursor-pointer">Chorus One</p>
          <div className="flex gap-3 text-base text-gray-500 mt-5">
            <p>Remote</p>
            <p>Engineering</p>
            <p>Full-Time</p>
            <p>$90K - $100K</p>
          </div>
          <div className="flex gap-3 text-base text-gray-500 mt-2">
            <p className="border px-3 py-1 rounded-md border-gray-400 hover:text-purple-700 hover:border-purple-700 cursor-pointer">Engineer</p>
            <p className="border px-3 py-1 rounded-md border-gray-400">Git</p>
            <p className="border px-3 py-1 rounded-md border-gray-400">Android</p>
            <p className="border px-3 py-1 rounded-md border-gray-400">Kotlin</p>
            <p className="border px-3 py-1 rounded-md border-gray-400">iOS</p>
          </div>
        </div>
        <div className="w-auto h-auto flex-grow flex justify-end">
          <p className="mt-2 mr-2 text-gray-500">Today</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
