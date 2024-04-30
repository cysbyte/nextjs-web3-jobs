import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/logo.svg";
import Wrapper from "./Wrapper";

const Header = () => {

  return (
    <header className="h-auto z-20 inset-0 py-0 bg-white bg-opacity-0"
    style={{backdropFilter: 'blur(2px)'}}>
      <Wrapper>
        <div className="flex justify-between py-5 items-center">
          <Link className="hover:text-teal-700 duration-300" href={"/"}>
            <div className="flex items-start justify-center gap-1 font-bold">
              <Image className="w-[69]" src={logo} alt="Minimax AI Voice Generator" />
              <p className="text-lg text-white">Mobile Dev Jobs</p>
            </div>
          </Link>
          

          <div className="m-auto hidden lg:block">
            <ul className="flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16">
              <li className="group cursor-pointer hover:text-teal-700">
                <div className="group relative flex gap-x-2 items-center justify-center">
                  <p className="text-lg text-white">Jobs</p>
                  <div className="relative ml-1 flex h-full items-center justify-center">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute group-hover:invisible"
                    >
                      <path
                        d="M3.5 4.5L6.5 7.5L9.5 4.5"
                        stroke="#111827"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute invisible group-hover:visible"
                    >
                      <path
                        d="M9.5 7.5L6.5 4.5L3.5 7.5"
                        stroke="#0F172A"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="invisible absolute z-50 pt-4 flex w-[15%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl group-hover:visible">
                  <Link href='/product/text-to-speech' className="y-2 block border-b border-gray-100 py-2 font-normal text-black hover:bg-gray-100 rounded-md md:mx-2">
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
              <Link className="hover:text-teal-700 duration-300" href={"/price"}>
                <p  className="text-lg text-white">Salaris</p>
              </Link>

              <Link className="hover:text-teal-700 duration-300" href={""}>
                <p  className="text-lg text-white">Talents</p>
              </Link>

              <Link className="hover:text-teal-700 duration-300" href={""}>
                <p className="text-lg text-white">Resources</p>
              </Link>
            </ul>
          </div>

           <Link
              className="px-5 py-2 hover:shadow-lg hover:scale-105 bg-[#f14669] text-white hover:bg-white hover:text-blue-950 active:scale-100 duration-300 rounded-md"
              href='/signup'
            >
              Post a Job
            </Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

