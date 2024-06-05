"use client";

import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import JobDetailInput from "./JobDetailInput";
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

export type FormFields = {
  jobTitle: string;
  jobType: string;
  jobRole: string;
  jobLocation: string;
  jobDescription: string;
  preferredApplicantLocation: string;
  keywords: string;
  currency: string;
  minSalary: number;
  maxSalary: number;
  applyMethod: string;
  applyDetail: string;
  companyName: string;
}

const PositionForm = () => {
  const [state, locationTypeDispatch] = useReducer(
    LocationTypeReducer,
    initialFormState
  );

  // const formSchema = z.object({
  //   position: z
  //     .string()
  //     .min(5, { message: "the position is not long enough" })
  //     .max(100, { message: "it's too long" })
  //     .trim(),

  //   description: z
  //     .string()
  //     .min(5, { message: "the description is not long enough" })
  //     .max(10000, { message: "description is too long" })
  //     .trim(),
  // });

  // const form = useForm<z.infer<typeof formSchema>>({
  //   mode: "onChange",
  //   defaultValues: {
  //     position: "",
  //     description: "",
  //   },
  // });
  

  const { register, handleSubmit, setValue, formState: {errors} } = useForm<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data)
  }

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
      value={{
        state: state,
        locationTypeDispatch: locationTypeDispatch,
      }}
    >
      <form className="w-full mx-auto mb-10" onSubmit={handleSubmit(onSubmit, (error)=>{console.log(error)})}>
        <h2 className="text-2xl font-semibold">Job Details</h2>
        <div className="mt-8">
          <label
            className="block text-black text-lg font-[500]"
            htmlFor="jobTitle"
          >
            Postion or Job Title <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={false}
            name="jobTitle"
            placeholder="e.g. Android Engineer, Customer Support"
            register={register}
            errors={errors}
            setValue={setValue}
          />

        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]" htmlFor="type">
            Job Type <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={true}
            name="jobType"
            placeholder="select a job type"
            options={jobTypeOptions}
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]" htmlFor="role">
            Job Role <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={true}
            name="jobRole"
            placeholder="select a job role"
            options={jobRoleOptions}
            errors={errors}
            setValue={setValue}
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
          <PreferredLocationsDropdown id="jobLocation"/>
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
            name="keywords"
            placeholder="e.g. ReactNative, Flutter, Android, iOS"
            errors={errors}
            setValue={setValue}
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
              name="currency"
              placeholder="Currency"
              options={currencyOptions}
              errors={errors}
            setValue={setValue}
            />
            <JobDetailInput
              hasDropdown={false}
              name="minSalary"
              type="number"
              placeholder="Min Salary"
              errors={errors}
            setValue={setValue}
            />
            <JobDetailInput
              hasDropdown={false}
              name="maxSalary"
              placeholder="Max Salary"
              errors={errors}
            setValue={setValue}
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]">
            How to apply <span className={redColorClass}>*</span>
          </label>
          <ApplyTypeRadio register={register}/>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Company Details</h2>

        <div className="mt-8">
          <label
            className="block text-black text-lg font-[500]"
            htmlFor="companyName"
          >
            Company Name <span className={redColorClass}>*</span>
          </label>
          <JobDetailInput
            hasDropdown={false}
            name="companyName"
            placeholder="Your Company Name"
            errors={errors}
            setValue={setValue}
          />
        </div>
        <button type="submit" className="mt-16 bg-deep-blue w-full py-4 font-semibold rounded-md text-white hover:bg-gray-800">Submit</button>
      </form>
    </FormContext.Provider>
  );
};

export default PositionForm;
