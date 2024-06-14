"use client";

import DOMPurify, { sanitize } from "dompurify";
import React from "react";

interface IProps {
  jobDescription: string;
}

const jobDescription = (props: IProps) => {
  const sanitizedHtml = DOMPurify.sanitize(props.jobDescription);
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></p>;
    </div>
  );
};

export default jobDescription;
