"use client";

import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import JobDetailInput from "../shared/JobDetailInput";
import LocationRadio from "./LocationTypeRadio";
import * as z from "zod";
import { EditorConvertToHTML } from "./RichTextEditor";
import PreferredLocationsDropdown from "./PreferredLocationsDropdown";
import { currencyDictionary } from "@/utils/countryData";
import {
  FormContext,
  initialFormState,
  LocationTypeReducer,
} from "./FormContext";
import { string } from "zod";
import ApplyTypeRadio from "./ApplyTypeRadio";

const PositionForm = () => {
  const [state, locationTypeDispatch] = useReducer(
    LocationTypeReducer,
    initialFormState
  );

  const formSchema = z.object({
    position: z
      .string()
      .min(5, { message: "the position is not long enough" })
      .max(100, { message: "it's too long" })
      .trim(),

    description: z
      .string()
      .min(5, { message: "the description is not long enough" })
      .max(10000, { message: "description is too long" })
      .trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    defaultValues: {
      position: "",
      description: "",
    },
  });
  const jobTypeOptions = [
    "FullTime",
    "Contract",
    "Freelance",
    "PartTime",
    "Internship",
  ];
  const jobRoleOptions = [
    "Engineering",
    "Design",
    "Marketing",
    "Operations",
    "Customer Support",
    "Sales",
    "Others",
  ];

  const redColorClass = "text-[rgba(255,50,50,1)]";

  const currencyOptions = useMemo(
    () =>
      Object.keys(currencyDictionary).map(
        (key, index) => key + " - " + Object.values(currencyDictionary)[index]
      ),
    [currencyDictionary]
  );

  return (
    <FormContext.Provider
      value={{ state: state, locationTypeDispatch: locationTypeDispatch }}
    >
      <form className="w-full mx-auto mb-10">
        <h2 className="text-2xl font-semibold">Job Details</h2>
        <div className="mt-8">
          <label
            className="block text-black text-lg font-[500]"
            htmlFor="position"
          >
            Postion or Job Title <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={false}
            id="position"
            placeHolder="e.g. Android Engineer, Customer Support"
          />
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]" htmlFor="type">
            Job Type <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={true}
            id="type"
            placeHolder="select a job type"
            options={jobTypeOptions}
          />
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]" htmlFor="role">
            Job Role <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={true}
            id="role"
            placeHolder="select a job role"
            options={jobRoleOptions}
          />
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]">
            Job Location <span className={redColorClass}>*</span>
          </label>
          <LocationRadio />
        </div>

        <div className="mt-8">
          <label
            className="block text-black text-lg font-[500]"
            htmlFor="description"
          >
            Job Description <span className={redColorClass}>*</span>
          </label>
          <EditorConvertToHTML />
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]" htmlFor="type">
            Preferred Applicant Locations{" "}
            <span className={redColorClass}>*</span>
          </label>
          <PreferredLocationsDropdown id="type" />
        </div>

        <div className="mt-8">
          <label
            className="block text-black text-lg font-[500]"
            htmlFor="keywords"
          >
            Keywords{" "}
          </label>
          <JobDetailInput
            hasDropdown={false}
            id="keywords"
            placeHolder="e.g. ReactNative, Flutter, Android, iOS"
          />
          <p className="text-sm mt-2 text-gray-500">
            Please use a comma to seperate multiple keywords or leave black.
          </p>
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]" htmlFor="type">
            Annual Salary
          </label>
          <div className="flex justify-between items-center gap-4 w-full">
            <JobDetailInput
              hasDropdown={true}
              id="currency"
              placeHolder="Currency"
              options={currencyOptions}
            />
            <JobDetailInput
              hasDropdown={false}
              id="minSalary"
              type="number"
              placeHolder="Min Salary"
            />
            <JobDetailInput
              hasDropdown={false}
              id="maxSalary"
              placeHolder="Max Salary"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]">
            How to apply <span className={redColorClass}>*</span>
          </label>
          <ApplyTypeRadio />
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Company Details</h2>

        <div className="mt-8">
          <label
            className="block text-black text-lg font-[500]"
            htmlFor="position"
          >
            Company Name <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={false}
            id="companyName"
            placeHolder="Your Company Name"
          />
        </div>
      </form>
    </FormContext.Provider>
  );
};

export default PositionForm;
