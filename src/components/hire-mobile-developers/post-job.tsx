"use client";

import React, { FC, useState } from "react";
import JobInputForm from "./job-input-form";
import JobPreview from "./job-preview";

const PostJob: FC = () => {
  const [step, setStep] = useState("create");

  return (
    <section className="basis-2/3 py-24 w-full">
      <h1 className=" text-4xl text-center font-semibold"> Post A Job</h1>
      <div className="flex justify-center items-center my-10">
        <div className="flex justify-evenly w-full text-xl">
          <div
            className="relative w-full border-b border-b-gray-300 py-3 flex items-center justify-center cursor-pointer"
            onClick={() => setStep("create")}
          >
            {step == "create" && (
              <div className="absolute w-full h-[6px] rounded-full bg-blue-800 -bottom-[3px]"></div>
            )}
            Create
          </div>
          <div
            className="relative w-full border-b border-b-gray-300 py-3 flex items-center justify-center cursor-pointer"
            onClick={() => setStep("preview")}
          >
            {step == "preview" && (
              <div className="absolute w-full h-[6px] rounded-full bg-blue-800 -bottom-[3px]"></div>
            )}
            Preview
          </div>
          <div
            className="relative w-full border-b border-b-gray-300 py-3 flex items-center justify-center cursor-pointer"
            onClick={() => setStep("pricing")}
          >
            {step == "pricing" && (
              <div className="absolute w-full h-[6px] rounded-full bg-blue-800 -bottom-[3px]"></div>
            )}
            Pricing Plan
          </div>
        </div>
      </div>
      {/* {step === "create" && <JobInputForm />}
      {step === "preview" && <JobPreview />} */}
    </section>
  );
};

export default React.memo(PostJob);
