import { useJobDetailStore } from "@/app/store/job-detail-store";
import React, { FC } from "react";
import { UseFormGetValues } from "react-hook-form";
import { FormFields } from "./job-post-form";
import DOMPurify, { sanitize } from "dompurify";
import Image from "next/image";

interface IProps {
  getValues?: UseFormGetValues<FormFields>;
}

const JobPreview: FC<IProps> = (props) => {
  const sanitizedHtml = DOMPurify.sanitize(
    props.getValues?.("jobDescription") as string
  );

  return (
    <section>
      <div className="w-full">
        <h2 className="text-2xl font-semibold">Job Details</h2>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Job Title</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("jobTitle")}</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Job Type</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("jobType")}</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Job Role</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("jobRole")}</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Job Location</h3>
          <p className="mt-4 text-gray-800">
            {props.getValues?.("locationType")}
          </p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Job Description</h3>
          <p
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            className="mt-4 list-inside text-gray-800 leading-8"
          ></p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">
            Preferred Applicant Locations
          </h3>
          <p className="mt-4 text-gray-800">
            {props.getValues?.("preferredApplicantLocation")}
          </p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Keywords</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("keywords")}</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Salary Currency</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("currency")}</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Min Salary</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("minSalary")}</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Max Salary</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("maxSalary")}</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">How to apply</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("applyType")}</p>
          <p>
            {props.getValues?.("applyType").includes("website")
              ? props.getValues?.("applyUrl")
              : props.getValues?.("applyEmail")}
          </p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg mt-6">Max Salary</h3>
          <p className="mt-4 text-gray-800">{props.getValues?.("maxSalary")}</p>
        </div>
      </div>
      <div className="w-full border-t mt-6">
      <h2 className="text-2xl font-semibold mt-6">Company Details</h2>
      <div>
        <h3 className=" font-semibold text-lg mt-6">Company Name</h3>
        <p className="mt-4 text-gray-800">{props.getValues?.("companyName")}</p>
      </div>
      {props.getValues?.("companyWebsite") && (
        <div>
          <h3 className=" font-semibold text-lg mt-6">Company Website</h3>
          <p className="mt-4 text-gray-800">
            {props.getValues?.("companyWebsite")}
          </p>
        </div>
      )}
      {props.getValues?.("companyLogo") && (
        <div>
          <h3 className=" font-semibold text-lg mt-6">Company Logo</h3>
          <Image
            width={200}
            height={200}
            src={props.getValues?.("companyLogo") || ""}
            alt=""
          />
        </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(JobPreview);
