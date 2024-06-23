"use client";

import { useEmailMessage } from "@/app/store/email-message-store";
import React, { useState } from "react";

const EmailMessage = () => {
  const [isShowing, setIsShowing] = useState(true);
  const message = useEmailMessage((state) => state.message);
  if (!isShowing || message.length === 0) return null;
  return (
    <div className="relative max-w-screen-2xl bg-green-600 text-white text-lg text-center px-10 py-6">
      {message}
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
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5 5L15 15"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default EmailMessage;
