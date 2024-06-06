"use client";

import React, {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import JobDetailInput from "./JobDetailInput";
import LocationTypeRadioGroup from "./LocationTypeRadioGroup";
import * as z from "zod";
import { EditorConvertToHTML } from "./RichTextEditor";
import PreferredLocationsDropdown from "./PreferredLocationsDropdown";
import {
  continents,
  countriesAndRegions,
  currencyDictionary,
} from "@/utils/countryData";
import {
  FormContext,
  initialFormState,
  LocationTypeReducer,
} from "./FormContext";
import { string } from "zod";
import ApplyTypeRadioGroup from "./ApplyTypeRadioGroup";

export type FormFields = {
  jobTitle: string;
  jobType: string;
  jobRole: string;
  locationType: string;
  jobDescription: string;
  preferredApplicantLocation: string;
  keywords: string;
  currency: string;
  minSalary: number;
  maxSalary: number;
  applyType: string;
  applyUrl: string;
  applyEmail: string;
  companyName: string;
};

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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = useCallback((data) => {
    console.log(data);
  }, []);

  const preferredLocationOptions = useMemo(() => {
    return [...continents, ...countriesAndRegions];
  }, [continents, countriesAndRegions]);

  const jobTypeOptions = useMemo(() => {
    return ["FullTime", "Contract", "Freelance", "PartTime", "Internship"];
  }, []);

  const jobRoleOptions = useMemo(() => {
    return [
      "Engineering",
      "Design",
      "Marketing",
      "Operations",
      "Customer Support",
      "Sales",
      "Others",
    ];
  }, []);

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
      <form
        className="w-full mx-auto mb-10"
        onSubmit={handleSubmit(onSubmit, (error) => {
          console.log(error);
        })}
      >
        <h2 className="text-2xl font-semibold">Job Details</h2>
        <div className="mt-8">
          <JobDetailInput
            hasDropdown={false}
            name="jobTitle"
            labelText="Postion or Job Title"
            placeholder="e.g. Android Engineer, Customer Support"
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>

        <div className="mt-8">
          <JobDetailInput
            hasDropdown={true}
            name="jobType"
            labelText="Job Type"
            placeholder="select a job type"
            options={jobTypeOptions}
            register={register}
            errors={errors}
            setValue={setValue}
            validate={(value) => {
              if (!jobTypeOptions.includes(value as string)) {
                return "Invalid Job Type, please select a valid Job Type";
              }
              return true;
            }}
          />
        </div>

        <div className="mt-8">
          <JobDetailInput
            hasDropdown={true}
            name="jobRole"
            labelText="Job Role"
            placeholder="select a job role"
            options={jobRoleOptions}
            register={register}
            errors={errors}
            setValue={setValue}
            validate={(value) => {
              if (!jobRoleOptions.includes(value as string)) {
                return "Invalid Job Role, please select a valid Job Role";
              }
              return true;
            }}
          />
        </div>

        <div className="mt-8">
          <LocationTypeRadioGroup
            name="locationType"
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>

        <div className="mt-8">
          <label
            className="block text-black text-lg font-[500]"
            htmlFor="description"
          >
            Job Description <span className="text-red-alert">*</span>
          </label>
          <EditorConvertToHTML
            name="jobDescription"
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>

        <div className="mt-8">
          <PreferredLocationsDropdown
            name="preferredApplicantLocation"
            register={register}
            errors={errors}
            setValue={setValue}
            validate={(value) => {
              const lastOption = value
                .toString()
                .split(",")
                .slice(-1)[0]
                .trim();
              if (!preferredLocationOptions.includes(lastOption)) {
                return "Invalid Location, please select a valid Location";
              }
              return true;
            }}
          />
        </div>

        <div className="mt-8">
          <JobDetailInput
            hasDropdown={false}
            name="keywords"
            labelText="Keywords"
            placeholder="e.g. ReactNative, Flutter, Android, iOS"
            register={register}
            errors={errors}
            setValue={setValue}
          />
          <p className="text-sm mt-2 text-gray-500">
            Please use a comma to seperate multiple keywords or leave black.
          </p>
        </div>

        <div className="mt-8">
          <label className="block text-black text-lg font-[500]" htmlFor="type">
            Preferred Applicant Locations{" "}
            <span className="text-red-alert">*</span>
          </label>
          <div className="flex justify-between items-center gap-4 w-full">
            <JobDetailInput
              hasDropdown={true}
              name="currency"
              placeholder="Currency"
              options={currencyOptions}
              register={register}
              errors={errors}
              setValue={setValue}
              pattern={{
                value: /^[0-9]+$/i,
                message: "Please enter a valid number.",
              }}
            />
            <JobDetailInput
              hasDropdown={false}
              name="minSalary"
              type="number"
              placeholder="Min Salary"
              register={register}
              errors={errors}
              setValue={setValue}
              pattern={{
                value: /^[0-9]+$/i,
                message: "Please enter a valid number.",
              }}
            />
            <JobDetailInput
              hasDropdown={false}
              name="maxSalary"
              placeholder="Max Salary"
              register={register}
              errors={errors}
              setValue={setValue}
              pattern={{
                value: /^[0-9]+$/i,
                message: "Please enter a valid number.",
              }}
            />
          </div>
        </div>

        <div className="mt-8">
          <ApplyTypeRadioGroup
            name="applyType"
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Company Details</h2>

        <div className="mt-8">
          <JobDetailInput
            hasDropdown={false}
            name="companyName"
            labelText="Company Name"
            placeholder="Your Company Name"
            register={register}
            errors={errors}
            setValue={setValue}
          />
        </div>
        <button
          type="submit"
          className="mt-16 bg-deep-blue w-full py-4 font-semibold rounded-md text-white hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default PositionForm;
