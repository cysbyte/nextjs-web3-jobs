import { hireSkills, jobSkills } from "@/utils/skills-data";
import { kebabCase } from "lodash";
import Link from "next/link";
import React, { FC, useMemo } from "react";

const Footer:FC = () => {

  const regions = useMemo(() => {
    return [
      "United States",
      "Europe",
      "United Kingdom",
      "Canada",
      "Germany",
      "France",
      "Asia",
      "India",
      "Australia",
      "Ireland",
      "Israel",
      "Italy",
      "Porland",
    ]
  }, []);
  
  return (
    <>
      <section className="container flex py-16 h-[580px] mb-20">
        <div className="w-auto h-full pr-10 flex flex-col justify-between">
          <div className="h-auto flex flex-col gap-5">
            <div className="text-lg font-bold text-deep-blue">
              Web3 Developer Jobs
            </div>
            <Link href={''} className="text-lg font-semibold text-deep-blue">
              Join us now
            </Link>
            <Link href='/signup' className="w-[80%] text-center px-8 py-2 rounded-md text-white bg-deep-blue hover:bg-gray-900 font-normal text-lg">
              Sign Up
            </Link>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <svg
              className="fill-[#0867C2] cursor-pointer"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
            <svg
              className="cursor-pointer"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.244 0.25H20.552L13.325 8.51L21.827 19.75H15.17L9.956 12.933L3.99 19.75H0.679998L8.41 10.915L0.253998 0.25H7.08L11.793 6.481L17.244 0.25ZM16.083 17.77H17.916L6.084 2.126H4.117L16.083 17.77Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>
        <div className=" flex-grow h-full text-deep-blue flex justify-between items-start gap-2">
          <div className="basis-1/4 h-full">
            <h3 className=" font-semibold text-lg">Hire Web3 Developers</h3>
            <div className="mt-2 flex flex-col justify-between">
              {useMemo(()=>hireSkills, []).map((item, index) => (
                <Link href={`/hire-${kebabCase(item)}-developers`} className="mt-3 text-sm" key={item}>
                  Hire {item} Developers
                </Link>
              ))}
              <p className="mt-3 text-sm">Hire Web3 Designers</p>
            </div>
          </div>
          <div className="basis-1/4 h-full">
            <h3 className=" font-semibold text-lg">Find Web3 Jobs</h3>
            <div className="mt-2 flex flex-col justify-between">
              {useMemo(()=>jobSkills,[]).map((item, index) => (
                <Link href={`/jobs/${kebabCase(item)}`} className="mt-3 text-sm" key={item}>
                  Find {item} Jobs
                </Link>
              ))}
            </div>
          </div>
          <div className="basis-1/4">
            <h3 className=" font-semibold text-lg">Find Remote Web3 Jobs</h3>
            <div className="mt-2 flex flex-col justify-between">
              {useMemo(()=>jobSkills,[]).map((item, index) => (
                <p className="mt-3 text-sm" key={item}>
                  Remote {item} Developers
                </p>
              ))}
            </div>
          </div>
          <div className="basis-1/4">
            <h3 className=" font-semibold text-lg">Web3 Jobs By Location</h3>
            <div className="mt-2 flex flex-col justify-between">
              {regions.map((item, index) => (
                <p className="mt-3 text-sm" key={item}>
                  Web3 jobs in {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center border-y w-full h-[100px]">
        <p className="text-deep-blue text-base">
          Web3 Dev Jobs © {new Date().getFullYear()}
        </p>
      </section>
    </>
  );
};

export default React.memo(Footer);
