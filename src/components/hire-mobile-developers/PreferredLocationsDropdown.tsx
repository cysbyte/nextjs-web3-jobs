"use client";

import { continents, countriesAndRegions } from "@/utils/countryData";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
  Validate,
} from "react-hook-form";
import { FormContext } from "./FormContext";
import { FormFields } from "./JobInputForm";

interface IProps {
  name: keyof FormFields;
  labelText?: string;
  register: UseFormRegister<FormFields>;
  setValue?: UseFormSetValue<FormFields>;
  errors?: FieldErrors<FormFields>;
  validate?:
    | Validate<string | number, FormFields>
    | Record<string, Validate<string | number, FormFields>>
  | undefined;
}

const PreferredLocationsDropdown = (props: IProps) => {
  const { state } = useContext(FormContext);

  const getOptions = useCallback(
    (state: { locationType: string }) => {
      const options =
        state.locationType === "Remote"
          ? [...continents, ...countriesAndRegions]
          : countriesAndRegions;
      return options.filter((ele, index, arr) => arr.indexOf(ele) === index);
    },
    [continents, countriesAndRegions]
  );

  const [options, setOptions] = useState(
    useMemo(() => getOptions(state), [state])
  );
  const [isOptionsShowing, setIsOptionsShowing] = useState(false);
  const [isCancelShowing, setIsCancelShowing] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null!);

  const handleCancelClick = () => {
    setIsCancelShowing(false);
    setSelectedLocations([]);
    setValue?.('preferredApplicantLocation', '')
  };

  const {
    name,
    labelText,
    setValue,
    register,
    validate,
    errors,
    ...otherProps
  } = props;

  useEffect(() => {
    setOptions(getOptions(state));
  }, [state.locationType]);

  return (
    <>
      <label className="block text-black text-lg font-[500]" htmlFor="type">
        Preferred Applicant Locations <span className="text-red-alert">*</span>
      </label>
      <div className="relative group w-auto h-auto">
        <div className="group w-full h-auto flex items-center border rounded-md px-2 mt-4 focus-within:border-purple-500 focus-within:shadow-lg hover:border-purple-500 hover:shadow-lg overflow-hidden">
          <div className="flex gap-2 mr-2">
            {selectedLocations.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 px-2 py-1 bg-gray-200 rounded-md"
              >
                <p className="text-center ml-1">{item}</p>
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                  className="fill-gray-800 cursor-pointer"
                  onClick={() => {
                    const newSelectedLocations = selectedLocations.filter(
                      (location) => location !== item
                    );
                    setSelectedLocations(newSelectedLocations);
                    setValue?.('preferredApplicantLocation', selectedLocations.join(','))
                    if (newSelectedLocations.length === 0) {
                      setIsCancelShowing(false);
                    }
                  }}
                >
                  <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                </svg>
              </div>
            ))}
          </div>
          <input
            {...register?.(name, {
              required: `Preferred Applicant Locations can not be empty`,
              minLength: {
                value: 2,
                message: `${labelText} must be at least 2 characters long`,
              },
              maxLength: {
                value: 100,
                message: `${labelText} must be at most 100 characters long`,
              },
              validate: validate
            })}
            {...otherProps}
            ref={inputRef}
            className="appearance-none focus:outline-none w-full py-4 text-gray-700 leading-tight placeholder-gray-400 placeholder:text-base placeholder:pl-0 px-0 shadow-slate-900"
            type="text"
            placeholder="select multiple locations"
            onClick={() => setIsOptionsShowing(!isOptionsShowing)}
            onBlur={() => setIsOptionsShowing(false)}
            onChange={(e) => {
              if (e.currentTarget.value.trim() === "") {
                setOptions(getOptions(state));
                return;
              }
              setOptions(
                options.filter((option) =>
                  option.toLowerCase().startsWith(e.currentTarget.value.trim())
                )
              );
            }}
          />
          {isCancelShowing && (
            <div className="w-auto h-auto" onClick={handleCancelClick}>
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="fill-gray-400 hover:fill-gray-800 mr-4 transition-all"
              >
                <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
              </svg>
            </div>
          )}

          <div
            className="w-auto h-auto"
            onClick={() => setIsOptionsShowing(!isOptionsShowing)}
          >
            <svg
              height="20"
              width="20"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
              className="fill-gray-400 hover:fill-gray-800 transition-all"
            >
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
            </svg>
          </div>
        </div>
        {isOptionsShowing && (
          <div className="absolute max-h-96 overflow-auto z-50 mt-1 pt-0 flex w-[100%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl">
            {options.map((item, index) => (
              <p
                key={item}
                className="my-1 block border-b border-gray-100 py-2 font-normal text-slate-700 hover:text-purple-500 hover:rounded-md md:mx-2 cursor-pointer transition-all"
                onMouseDown={(e: React.MouseEvent) => {
                  e.preventDefault();
                  setIsOptionsShowing(false);
                  setIsCancelShowing(true);
                  const newSelectedLocations=[...selectedLocations, item]
                  setSelectedLocations(newSelectedLocations);
                  inputRef.current.placeholder = "";
                  setOptions(options.filter((option) => option !== item));
                  setValue?.('preferredApplicantLocation', newSelectedLocations.join(','))
                }}
              >
                {item}
              </p>
            ))}
          </div>
        )}
        {errors?.[name] && (
          <p className=" text-sm text-red-alert mt-2">
            {errors?.[name]?.message}
          </p>
        )}
      </div>
    </>
  );
};

export default PreferredLocationsDropdown;
