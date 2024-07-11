import React, { FC } from "react";
import Link from "next/link";
import hero0 from "/public/hero1.png";
import Image from "next/image";

const Hero:FC = () => {
  return (
    // <section className=" w-full h-[560px] mt-0 py-0 flex justify-center items-center "
    // style={{backdropFilter: 'blur(2px)'}}>
    <section className="container w-full h-auto md:h-[560px] my-10 py-0 flex flex-col md:flex-row justify-center items-center font-comic">
      <div className="basis-3/5 w-full h-auto">
        <h1 className=" text-[2rem] lg:text-[2.8rem] xl:text-[3.3rem] text-center md:text-left w-full font-[900] leading-tight tracking-wider text-deep-blue ">
          Hire develpers to grow your team
        </h1>
        <h6 className="text-sm lg:text-lg xl:text-xl mt-6 w-full text-deep-blue text-center md:text-left">
          Find the best Web3 Development jobs at leading companies <br/> & hire the
          best Web3 developers
        </h6>
        <div className="flex gap-5 justify-center md:justify-start items-center my-10">
          <Link
            className="flex justify-center items-center  gap-2 py-[0.7rem] md:py-3 w-[200px] text-sm md:text-base lg:text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-purple-500 text-white active:scale-100 duration-300 border border-purple-500 rounded-md"
            href={""}
          >
            Get started
          </Link>
          <Link
            className="flex justify-center items-center gap-2 py-[0.7rem] md:py-3 w-[200px] text-sm md:text-base lg:text-lg border border-deep-blue font-bold text-center hover:shadow-lg hover:scale-105 text-deep-blue  active:scale-100 duration-300 rounded-md"
            href={""}
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="basis-2/5 w-full flex justify-end">
        <Image src={hero0} width={500} height={500} alt="" />
      </div>
    </section>
  );
};

export default React.memo(Hero);
