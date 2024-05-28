import React, { FC } from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" w-full h-[560px] mt-0 py-0 flex justify-center items-center font-hel ba"
    style={{backdropFilter: 'blur(2px)'}}>
      <div className="w-full h-auto px-[12%]">
        <h1 className=" text-left font-[550] text-[3.3rem] w-full leading-tight tracking-wider text-white ">
          Find Your Next
          <br />
          Mobile Development Job
        </h1>
        <h6 className="mt-6 w-full text-white text-left text-xl">
          Find the best Mobile Development jobs at leading companies <br/> & hire the
          best Mobile developers
        </h6>
        <div className="flex gap-5 justify-start items-center mt-8">
          <Link
            className="py-3 w-[200px] text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-purple-500 text-white hover:bg-white hover:text-blue-950 active:scale-100 duration-300 border-1 border-white rounded-md"
            href={"/hire-mobile-developers"}
          >
            Post a Job
          </Link>
          <Link
            className="py-3 w-[200px] text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-[#363b43] text-white active:scale-100 duration-300 rounded-md"
            href={""}
          >
            Find a Job
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
