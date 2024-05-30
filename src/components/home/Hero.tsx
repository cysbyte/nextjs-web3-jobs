import React, { FC } from "react";
import Link from "next/link";
import hero0 from "/public/hero0.png";
import Image from "next/image";

const Hero = () => {
  return (
    // <section className=" w-full h-[560px] mt-0 py-0 flex justify-center items-center font-hel ba"
    // style={{backdropFilter: 'blur(2px)'}}>
    <div className="relative flex w-full h-[560px] mt-0 py-0 justify-center items-center font-comic overflow-hidden">
      <div className="basis-1/2 w-full h-auto">
        <h1 className=" text-left font-[900] text-[3.3rem] w-full leading-tight tracking-wider text-[#14202E] ">
          Find Your Next
          <br />
          Mobile Development Job
        </h1>
        <h6 className="mt-6 w-full text-[#14202E] text-left text-xl">
          Find the best Mobile Development jobs at leading companies <br /> &
          hire the best Mobile developers
        </h6>
        <div className="flex gap-5 justify-start items-center mt-10 ml-2">
          <Link
            className="flex justify-center items-center gap-2 py-3 w-[200px] text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-purple-500 text-white active:scale-100 duration-300 border border-purple-500 rounded-md"
            href={"/hire-mobile-developers"}
          >
            <p> Post a Job</p>
            <svg
              className="w-4 h-6 mt-1 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <Link
            className="flex justify-center items-center gap-2 py-3 w-[200px] text-lg border border-[#14202E] font-bold text-center hover:shadow-lg hover:scale-105 text-[#14202E]  active:scale-100 duration-300 rounded-md"
            href={""}
          >
            <p>Find a Job</p>
            <svg
              className="w-4 h-6 mt-1 text-[#14202E] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="absolute top-[30%] left-[10%] -z-10">
        
        <svg className="fill-[#EFEFEF] -rotate-45" height="840" width="1500" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="300" ry="450" cx="820" cy="480" />
        </svg>
      </div>
      {/* <div className="-mr-20 -mt-40 p-3 bg-purple-500 rounded-3xl rota -rotate-45">
        <Image src={androidIcon} width={30} height={30} alt='' />
      </div> */}
      <div className="basis-1/2 w-full flex justify-end">
        <Image src={hero0} width={500} height={500} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
