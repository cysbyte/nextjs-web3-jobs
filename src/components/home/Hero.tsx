import React, { FC } from "react";
import Link from "next/link";
import hero0 from "/public/hero0.png";
import Image from "next/image";

const Hero:FC = () => {
  return (
    // <section className=" w-full h-[560px] mt-0 py-0 flex justify-center items-center font-hel ba"
    // style={{backdropFilter: 'blur(2px)'}}>
    <section className="relative flex w-full h-[560px] mt-0 py-0 justify-center items-center font-comic overflow-hidden">
      <div className="basis-1/2 w-full h-auto">
        <h1 className=" text-left font-[900] md:text-[2rem] text-[3.3rem] w-full leading-tight tracking-wider text-deep-blue ">
          Find Your Next
          <br />
          Mobile Development Job
        </h1>
        <h6 className="mt-6 w-full text-deep-blue text-left text-xl">
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
            className="flex justify-center items-center gap-2 py-3 w-[200px] text-lg border border-dashed font-bold text-center hover:shadow-lg hover:scale-105 text-deep-blue  active:scale-100 duration-300 rounded-md"
            href={""}
          >
            <p>Find a Job</p>
            <svg
              className="w-4 h-6 mt-1 text-deep-blue dark:text-white"
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
        <svg
          className="fill-[#EFEFEF] -rotate-45"
          height="840"
          width="1500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse rx="300" ry="450" cx="820" cy="480" />
        </svg>
      </div>
      {/* <div className="-mr-20 -mt-40 p-3 bg-purple-500 rounded-3xl rota -rotate-45">
        <Image src={androidIcon} width={30} height={30} alt='' />
      </div> */}
      <div className="relative basis-1/2 w-full flex justify-end">
        <div className="absolute p-2 left-10 top-40 w-12 h-12 bg-purple-500 -rotate-[24deg] rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
          >
            <path
              vector-effect="non-scaling-stroke"
              stroke="var(--icon-color, #ffffff)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15.117 3a3.907 3.907 0 01-.87 2.918 3.607 3.607 0 01-2.778 1.409 3.657 3.657 0 01.9-2.848A4.287 4.287 0 0115.117 3z"
              clip-rule="evenodd"
            ></path>
            <path
              vector-effect="non-scaling-stroke"
              stroke="var(--icon-color, #ffffff)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M18.295 18.381c.453-.69.844-1.42 1.17-2.178a3.997 3.997 0 01-.53-7.204 4.586 4.586 0 00-3.458-1.83c-.705.01-1.401.16-2.048.44-.433.22-.905.353-1.389.39a4.726 4.726 0 01-1.559-.36c-.6-.25-1.24-.388-1.888-.41a4.676 4.676 0 00-3.777 2.26c-1.31 1.998-1.09 5.805.999 8.992.79 1.2 1.808 2.508 3.127 2.508.46-.01.91-.123 1.32-.33a3.997 3.997 0 013.587 0c.395.217.838.334 1.289.34 1.329-.01 2.398-1.459 3.157-2.618z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="absolute p-2 right-24 top-32 w-12 h-12 bg-[#10CB6F] rotate-[18deg] rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
          >
            <path
              fill="var(--icon-color, #ffffff)"
              vector-effect="non-scaling-stroke"
              stroke="var(--icon-color, #ffffff)"
              stroke-miterlimit="10"
              stroke-width=".4"
              d="M9.893 6.726a.44.44 0 100-.88.44.44 0 000 .88zm3.522 0a.44.44 0 100-.88.44.44 0 000 .88z"
            ></path>
            <path
              vector-effect="non-scaling-stroke"
              stroke="var(--icon-color, #ffffff)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M11.656 3.83a5 5 0 00-5.23 4.82h10.46a5 5 0 00-5.23-4.82zm-2.501.58L8.375 3m5.791 1.41l.77-1.41"
            ></path>
            <path
              vector-effect="non-scaling-stroke"
              stroke="var(--icon-color, #ffffff)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16.896 8.648H6.426v9.2h10.47v-9.2zM4 8.648v6.3m15.314-6.3v6.3M9.57 17.85V21m4.174-3.15V21"
            ></path>
          </svg>
        </div>
        <Image src={hero0} width={500} height={500} alt="" />
      </div>
    </section>
  );
};

export default React.memo(Hero);
