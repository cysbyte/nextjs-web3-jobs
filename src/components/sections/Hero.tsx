import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" w-full h-[684px] mt-0 py-0 flex justify-center items-center font-hel">
      <div className="w-3/6 h-auto">
        <h1 className=" text-center font-bold text-6xl w-full leading-tight text-[#0D0D12]">
          Find Your Next
          <br />
          <span className="text-stroke-1">Mobile Development Job</span>
        </h1>
        <h6 className="mt-6 w-full text-center font-hel text-xl">
          Find the best Mobile Development jobs at leading companies & hire the
          best Mobile developers
        </h6>
        <div className="flex gap-5 justify-center items-center mx-10 mt-8">
          <Link
            className="py-3 w-[200px] text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-blue-950 text-white hover:bg-black hover:text-white active:scale-100 duration-300 border-1 border-white rounded-md"
            href={""}
          >
            Find a Job
          </Link>
          <Link
            className="py-3 w-[200px] text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-white text-blue-950 active:scale-100 duration-300 border-[1px] border-blue-950 rounded-md"
            href={""}
          >
            Hire a Developer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
