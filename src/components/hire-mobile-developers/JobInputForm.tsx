import { submitJob } from "@/app/action/action";
import {
  continents,
  countriesAndRegions,
  currencyDictionary,
} from "@/utils/countryData";
import { DevTool } from "@hookform/devtools";
import React, { FC, useCallback, useMemo, useReducer } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import ApplyTypeRadioGroup from "./ApplyTypeRadioGroup";
import {
  FormContext,
  initialFormState,
  LocationTypeReducer,
} from "./FormContext";
import JobDetailInput from "./JobDetailInput";
import LocationTypeRadioGroup from "./LocationTypeRadioGroup";
import PreferredLocationsDropdown from "./PreferredLocationsDropdown";
import { EditorConvertToHTML } from "./RichTextEditor";

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

const PositionForm: FC = () => {
  const [state, locationTypeDispatch] = useReducer(
    LocationTypeReducer,
    initialFormState
  );

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { isSubmitted, errors, isSubmitting, isSubmitSuccessful},
    control,
  } = useForm<FormFields>({
    defaultValues: {
      jobTitle: "Android",
      jobType: "FullTime",
      jobRole: "Engineering",
      locationType: "Remote",
      jobDescription: "aaaaaaaaaa",
      preferredApplicantLocation: "WorldWide",
      keywords: "Android",
      currency: "ALL - Albania",
      minSalary: 100000,
      maxSalary: 150000,
      applyType: "website",
      applyUrl: "https://google.com",
      applyEmail: "",
      companyName: "IBM",
    },
  });

  const onSubmit = useCallback(async (data: FormFields) => {
    if (isSubmitting) return
    console.log(data);
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
        className="w-full mx-auto mb-10"
        onSubmit={handleSubmit(onSubmit, onError)}
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
            Salary
            <span className="text-red-alert">*</span>
          </label>
          <div className="flex flex-col justify-between items-center gap-4 w-full">
            <JobDetailInput
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
              validate={
                (value) => {
                  if (Number(value) < Number(getValues('minSalary'))) {
                    return "Max Salary must great than Min Salary";
                  }
                  return true;
                }
              }
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
        {isSubmitted && hasError() && (
          <p className=" text-sm text-red-alert mt-2">
            Please scroll up to fix the error fields before proceeding!
          </p>
        )}
      </form>
      <DevTool control={control} />
    </FormContext.Provider>
  );
};

export default React.memo(PositionForm);
