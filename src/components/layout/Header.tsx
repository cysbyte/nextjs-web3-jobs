import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/logo.svg";
import Wrapper from "./Wrapper";
import Feedback from "../feedback/feedback";

const Header = () => {

  return (
    <header className="h-auto z-20 inset-0 py-0 bg-white bg-opacity-0"
    style={{backdropFilter: 'blur(2px)'}}>
        <div className="flex justify-between py-5 items-center font-comic">

          <div className="basis-1/3 flex justify-start">
          <Link className="hover:text-purple-500 duration-300" href={"/"}>
            <div className="flex items-start justify-center gap-1 font-bold">
              <Image className="w-[69]" src={logo} alt="Mobile Dev Jobs" />
              <p className="text-lg text-[#14202E]">Mobile Dev Jobs</p>
            </div>
          </Link>            
          </div>
          
          <div className="basis-1/3 m-auto bg-[#efefef] text-[#14202E] rounded-md px-6 py-2 hidden lg:block">
            <ul className="flex h-full items-center duration-300 gap-x-4 sm:gap-x-10 text-16">
              <li className="group cursor-pointer hover:text-purple-500">
                <div className="group relative flex gap-x-2 items-center justify-center">
                  <p className="text-lg text-black">Jobs</p>
                  <div className="relative ml-1 flex h-full items-center justify-center">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute group-hover:rotate-180 transition-all"
                    >
                      <path
                        d="M3.5 4.5L6.5 7.5L9.5 4.5"
                        stroke="#111827"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>                    
                  </div>
                </div>
                <div className="invisible absolute z-50 pt-4 flex w-[15%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl group-hover:visible">
                  <Link href='/product/text-to-speech' className="my-2 block border-b border-gray-100 py-2 font-normal text-black hover:bg-gray-100 rounded-md md:mx-2">
                    All Jobs
                  </Link>

                  <Link href='/product/voice/main/0'  className="my-2 block border-b border-gray-100 py-2 font-normal text-black hover:bg-gray-100 rounded-md md:mx-2">
                    Remote
                  </Link>
                  <a className="my-2 block border-b border-gray-100 py-2 font-normal text-black hover:bg-gray-100 rounded-md md:mx-2">
                    API
                  </a>
                </div>
              </li>
              <Link className="hover:text-purple-500 duration-300" href={"/price"}>
                <p  className="text-lg text-black">Salaris</p>
              </Link>

              <Link className="hover:text-purple-50 duration-300" href={""}>
                <p  className="text-lg text-black">Talents</p>
              </Link>

              <Link className="hover:text-purple-500 duration-300" href={""}>
                <p className="text-lg text-black">Resources</p>
              </Link>
            </ul>
          </div>

          <div className="basis-1/3 flex justify-end">
            <Link
              className=" px-5 py-2 hover:shadow-lg hover:scale-105 border border-[#14202E] bg-white text-[#14202E] hover:bg-white hover:text-blue-950 active:scale-100 duration-300 rounded-md"
              href='/hire-mobile-developers'
            >
              Post a Job
            </Link>
          </div>
           
        </div>
      <Feedback/>
    </header>
  );
};

export default Header;

