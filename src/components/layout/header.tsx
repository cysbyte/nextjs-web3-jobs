import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import logo from "/public/logo.svg";
import Feedback from "../feedback/feedback";
import Subscription from "../subscription/subscription";
import User from "./user";
import { Providers } from "@/store/providers";
import SignupButton from "./signup-button";
import AvatarButton from "./avatar-button";

const Header: FC = () => {
  return (
    <header
      className="container h-auto z-20 sticky inset-0 backdrop-blur-md py-0 bg-white bg-opacity-90"
    >
      <div className="flex justify-between py-3 items-center font-comic">
        <div className="basis-1/2 lg:basis-1/3 flex justify-start items-center">
          <Link className="hover:text-purple-500 duration-300" href={"/"}>
            <div className="flex items-start justify-center gap-1 font-bold">
              <Image className="w-[69]" src={logo} alt="Web3 Dev Jobs" />
              <p className=" text-sm md:text-base lg:text-base text-deep-blue">Web3 Developer Jobs</p>
            </div>

          </Link>
          <Link
              className="text-sm ml-1 py-2 px-1 h-auto hover:shadow-lg hover:scale-105 bg-blue-500 text-white active:scale-100 duration-300 border-2 rounded-md"
              href='https://github.com/cysbyte/nextjs-web3-jobs'
            >
              Github
            </Link>
        </div>

        <div className="basis-1/3 m-auto text-sm md:text-base lg:text-base bg-[#efefef] text-deep-blue rounded-md px-6 py-2 hidden lg:block">
          <ul className="flex h-full items-center duration-300 gap-x-4 sm:gap-x-10 text-16">
            <div className="group cursor-pointer hover:text-purple-500">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="invisible absolute z-50 pt-4 flex w-[15%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl group-hover:visible">
                <Link
                  href="/jobs"
                  className="my-2 block border-b border-gray-100 py-2 font-normal text-black hover:bg-gray-100 rounded-md md:mx-2"
                >
                  All Jobs
                </Link>

                <Link
                  href="/product/voice/main/0"
                  className="my-2 block border-b border-gray-100 py-2 font-normal text-black hover:bg-gray-100 rounded-md md:mx-2"
                >
                  Remote
                </Link>
                <a className="my-2 block border-b border-gray-100 py-2 font-normal text-black hover:bg-gray-100 rounded-md md:mx-2">
                  API
                </a>
              </div>
            </div>
            <Link
              className="hover:text-purple-500 duration-300"
              href={"/price"}
            >
              <p className="text-lg text-black">Salaris</p>
            </Link>

            <Link className="hover:text-purple-50 duration-300" href={""}>
              <p className="text-lg text-black">Talents</p>
            </Link>

            <Link className="hover:text-purple-500 duration-300" href={""}>
              <p className="text-lg text-black">Resources</p>
            </Link>
          </ul>
        </div>

        <div className="basis-1/2 lg:basis-1/3 flex justify-end items-center gap-4">
          <Providers>
            <SignupButton />
          </Providers>
          <Link
            className="text-sm md:text-base text-nowrap lg:text-base px-3 py-2 hover:shadow-lg border border-purple-500 bg-purple-500 text-white hover:scale-105 active:scale-100 duration-300 rounded-md"
            href="/hire/hire-web3-developers"
          >
            Post a Job
          </Link>
          <Providers>
            <AvatarButton />
          </Providers>
        </div>
      </div>
      <Feedback />
      <Subscription />
    </header>
  );
};

export default React.memo(Header);
