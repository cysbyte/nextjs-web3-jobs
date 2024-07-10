'use client';

import React, { FC, useState } from "react";
import Portal from "../layout/portal";
import CustomInput from "./custom-input";
import PreferredLocationsDropdown from "./preferred-locations-dropdown";

const Subscription:FC = () => {
  
  const [isShowing, setIsShowing] = useState(true)

  if (!isShowing) return null
  
  return (
    <Portal elementId="#subscriptionPortal">
      <div className="max-w-screen-2xl block 2xl:hidden left-[50%] -translate-x-[50%] fixed bottom-0 w-full h-[60px] bg-[#01192E] z-10">
        <div className="relative w-auto h-full flex items-center justify-center gap-2">
          <h3 className=" text-base text-white">
            Subscribe to get new Web3 Dev Jobs Alert
          </h3>
          <div className="flex h-full items-center justify-center w-[500px] gap-0">
            <div className="basis-1/2 h-[46px]">
              <CustomInput placeHolder="Your Email" id="subscribeEmail" type="email" />
            </div>
            <div className="basis-1/2 h-[46px]">
              <PreferredLocationsDropdown id="location" />
            </div>
            <button className="h-[46px] basis-1/2 border-t border-r border-b text-base font-semibold rounded-tr-full rounded-br-full border-white bg-white text-[#01192E]">
              Subscribe
            </button>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => setIsShowing(false)}
          >
            <path
              d="M15 5L5 15"
              stroke="#8e8e8e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5 5L15 15"
              stroke="#8e8e8e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </Portal>
  );
};

export default React.memo(Subscription);
