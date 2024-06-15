"use client";

import DOMPurify, { sanitize } from "dompurify";
import React from "react";

interface IProps {
  jobDescription: string;
}

const jobDescription = (props: IProps) => {
  const sanitizedHtml = DOMPurify.sanitize(props.jobDescription);
  return (
    <div className=" basis-2/3 text-gray-600">
      <p dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></p>
      <button className="py-3 px-24 mt-10 w-fit text-lg font-bold text-center hover:shadow-lg hover:scale-105 bg-purple-500 text-white active:scale-100 duration-300 border border-purple-500 rounded-md">Apply</button>
    </div>
  );
};

export default jobDescription;
