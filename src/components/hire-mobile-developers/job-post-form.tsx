"use client";

import { submitJob } from "@/action/action";
import {
  continents,
  countriesAndRegions,
  currencyDictionary,
} from "@/utils/countryData";
import { DevTool } from "@hookform/devtools";
import { startCase } from "lodash";
import React, { FC, useCallback, useMemo, useReducer, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import ApplyTypeRadioGroup from "./apply-type-radio-group";
import CompanyLogoInput from "./company-logo-input";
import {
  FormContext,
  initialFormState,
  LocationTypeReducer,
} from "./form-context";
import JobDetailInput from "./job-detail-input";
import JobPreview from "./job-preview";
import jobPreview from "./job-preview";
import LocationTypeRadioGroup from "./location-type-radio-group";
import PreferredLocationsDropdown from "./preferred-locations-dropdown";
import { EditorConvertToHTML } from "./rich-text-editor";

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
  companyWebsite: string;
  companyLogo: string;
};

interface IProps {
  skill: string;
}

const JobPostForm: FC<IProps> = (props) => {
  const [step, setStep] = useState("create");

  const [state, locationTypeDispatch] = useReducer(
    LocationTypeReducer,
    initialFormState
  );

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { isSubmitted, errors, isSubmitting, isSubmitSuccessful },
    control,
  } = useForm<FormFields>({
    defaultValues: {
      jobTitle: `${
        props.skill === "" ? "" : startCase(props.skill) + " Developer"
      }`,
      jobType: "",
      jobRole: "",
      locationType: "",
      jobDescription: "",
      preferredApplicantLocation: "",
      keywords: `${
        props.skill === "" ? "" : startCase(props.skill)+', '
      }`,
      currency: "",
      // minSalary: 0,
      // maxSalary: 0,
      applyType: "website",
      applyUrl: "",
      applyEmail: "",
      companyName: "",
    },
    // defaultValues: {
    //   jobTitle: "Android Senior Developer",
    //   jobType: "FullTime",
    //   jobRole: "Engineering",
    //   locationType: "Remote",
    //   jobDescription: "",
    //   preferredApplicantLocation: "United States",
    //   keywords: "Android,Kotlin,Jetpack,Retrofit",
    //   currency: "USD - United States",
    //   minSalary: 110000,
    //   maxSalary: 130000,
    //   applyType: "website",
    //   applyUrl: "https://digitalcareers.infosys.com/infosys/global-careers/apply-android-senior-developer/345272?Codes=LinkedIn",
    //   applyEmail: "",
    //   companyName: "Infosys",
    // },
  });

  const returnEdit = useCallback(() => {
    setStep("create");
  }, []);

  const onPreviewSubmit = useCallback(async (data: FormFields) => {
    if (isSubmitting) return;
    console.log(data);
    setStep("preview");
    // const formData = new FormData();
    // Object.keys(data).forEach((key, index) =>
    //   formData.set(key, Object.values(data)[index] as string)
    // );
    // const job = await submitJob(formData);
  }, []);

  const onSubmit = useCallback(async (data: FormFields) => {
    if (isSubmitting) return;
    console.log(data);
    // setStep('preview');
    const formData = new FormData();
    Object.keys(data).forEach((key, index) =>
      formData.set(key, Object.values(data)[index] as string)
    );
    const job = await submitJob(formData);
  }, []);

  const onError = useCallback((error: FieldErrors<FormFields>) => {
    console.log(error);
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

  const hasError = useCallback(() => {
    return Object.keys(errors).some((key, index) => {
      return Object.values(errors)[index] !== null;
    });
  }, [errors]);

  return (
    <FormContext.Provider
      value={{
        state: state,
        locationTypeDispatch: locationTypeDispatch,
      }}
    >
      <form
        noValidate={true}
        className="w-full mx-auto mb-10 basis-2/3 overflow-scroll no-scrollbar"
        onSubmit={handleSubmit(onPreviewSubmit, onError)}
      >
        <div className="flex justify-center items-center my-10">
          <div className="flex justify-evenly w-full text-xl">
            <div
              className="relative w-full border-b border-b-gray-300 py-3 flex items-center justify-center"
              onClick={() => setStep("create")}
            >
              {step == "create" && (
                <div className="absolute w-full h-[6px] rounded-full bg-blue-800 -bottom-[3px]"></div>
              )}
              Create
            </div>
            <div className="relative w-full border-b border-b-gray-300 py-3 flex items-center justify-center">
              {step == "preview" && (
                <div className="absolute w-full h-[6px] rounded-full bg-blue-800 -bottom-[3px]"></div>
              )}
              Preview
            </div>
            <div className="relative w-full border-b border-b-gray-300 py-3 flex items-center justify-center">
              {step == "pricing" && (
                <div className="absolute w-full h-[6px] rounded-full bg-blue-800 -bottom-[3px]"></div>
              )}
              Pricing Plan
            </div>
          </div>
        </div>

        {step === "create" && (
          <div>
            <h2 className="text-2xl font-semibold">Job Details</h2>
            <div className="mt-8">
              <JobDetailInput
                required={true}
                hasDropdown={false}
                name="jobTitle"
                labelText="Postion or Job Title"
                placeholder="e.g. Android Developer, Customer Support"
                register={register}
                errors={errors}
                setValue={setValue}
                validate={(value) => {
                  return true;
                }}
              />
            </div>

            <div className="mt-8">
              <JobDetailInput
                required={true}
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
                required={true}
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
                getValues={getValues}
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
                getValues={getValues}
                setValue={setValue}
              />
            </div>

            <div className="mt-8">
              <PreferredLocationsDropdown
                name="preferredApplicantLocation"
                register={register}
                errors={errors}
                getValues={getValues}
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
                required={true}
                hasDropdown={false}
                name="keywords"
                labelText="Keywords"
                placeholder="e.g. ReactNative, Flutter, Android, iOS"
                register={register}
                errors={errors}
                setValue={setValue}
                validate={(value) => {
                  return true;
                }}
              />
              <p className="text-sm mt-2 text-gray-500">
                Please use a comma to seperate multiple keywords or leave black.
              </p>
            </div>

            <div className="mt-8">
              <label
                className="block text-black text-lg font-[500]"
                htmlFor="type"
              >
                Salary
                <span className="text-red-alert">*</span>
              </label>
              <div className="flex flex-col justify-between items-center gap-4 w-full">
                <JobDetailInput
                  required={true}
                  hasDropdown={true}
                  name="currency"
                  type="text"
                  placeholder="Currency"
                  options={currencyOptions}
                  register={register}
                  errors={errors}
                  setValue={setValue}
                  validate={(value) => {
                    if (!currencyOptions.includes(value as string)) {
                      return "Invalid Currency, please select a valid Currency";
                    }
                    return true;
                  }}
                />
                <JobDetailInput
                  required={true}
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
                  required={true}
                  hasDropdown={false}
                  name="maxSalary"
                  placeholder="Max Salary"
                  register={register}
                  errors={errors}
                  setValue={setValue}
                  validate={(value) => {
                    if (Number(value) < Number(getValues("minSalary"))) {
                      return "Max Salary must great than Min Salary";
                    }
                    return true;
                  }}
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
                required={true}
                hasDropdown={false}
                name="companyName"
                labelText="Company Name"
                placeholder="Your Company Name"
                register={register}
                errors={errors}
                setValue={setValue}
                validate={(value) => {
                  return true;
                }}
              />
            </div>

            <div className="mt-8">
              <JobDetailInput
                required={false}
                hasDropdown={false}
                name="companyWebsite"
                labelText="Company Website"
                placeholder="https://"
                register={register}
                errors={errors}
                setValue={setValue}
              />
            </div>

            <div className="mt-8">
              <CompanyLogoInput />
            </div>

            <button
              type="submit"
              className="mt-16 bg-deep-blue w-full py-4 font-semibold rounded-md text-white hover:bg-gray-800"
            >
              Preview
            </button>
            {isSubmitted && hasError() && (
              <p className=" text-sm text-red-alert mt-2">
                Please scroll up to fix the error fields before proceeding!
              </p>
            )}
          </div>
        )}
        {step === "preview" && (
          <JobPreview
            getValues={getValues}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            returnEdit={returnEdit}
          />
        )}
      </form>
      <DevTool control={control} />
    </FormContext.Provider>
  );
};

export default React.memo(JobPostForm);
