"use client";

import React, { FC, useCallback, useState } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  Validate,
  ValidationRule,
} from "react-hook-form";
import { FormFields } from "./job-post-form";

interface IProps {
  required: boolean;
  hasDropdown: boolean;
  placeholder: string;
  name: keyof FormFields;
  type?: string;
  options?: string[];
  labelText?: string;
  register: UseFormRegister<FormFields>;
  setValue?: UseFormSetValue<FormFields>;
  errors?: FieldErrors<FormFields>;
  validate?:
    | Validate<string | number, FormFields>
    | Record<string, Validate<string | number, FormFields>>
    | undefined;
  pattern?: ValidationRule<RegExp> | undefined;
}

const JobDetailInput: FC<IProps> = (props) => {
  const [isOptionsShowing, setIsOptionsShowing] = useState(false);
  const [isCancelShowing, setIsCancelShowing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //   const inputRef = useRef<HTMLInputElement>(null!);

  const handleCancelClick = useCallback(() => {
    setIsCancelShowing(false);
    setInputValue("");
  }, []);

  const {
    required,
    hasDropdown,
    name,
    labelText,
    setValue,
    register,
    validate,
    pattern,
    errors,
    options,
    ...otherProps
  } = props;

  const selectOption = useCallback(
    (e: React.MouseEvent, item: string) => {
      e.preventDefault();
      setIsOptionsShowing(false);
      setIsCancelShowing(true);
      setValue?.(name, item);
      setInputValue(item);
    },
    [name]
  );

  const [dropdownOptions, setDropdownOptions] = useState(options)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue?.(name, e.currentTarget.value);
            setInputValue(e.currentTarget.value);
    setDropdownOptions(
      options?.filter((option) =>
        option.toLowerCase().startsWith(e.currentTarget.value.trim().toLowerCase())
      )
    );
  },[options])

  let text = labelText ? labelText : props.placeholder;
  if (text.includes("https://")) {
    text = "Url for receiving applicants";
  }

  const requiredTemp = required ? text+'can not be empty': false

  return (
    <article className="relative group w-full h-auto">
      {labelText && (
        <label className="block text-black text-lg font-[500]" htmlFor={name}>
          {labelText}{" "}
          {required && <span className="text-red-alert">*</span>}
        </label>
      )}
      <div className="group w-full h-auto flex items-center border border-gray-300 rounded-md px-2 mt-4 focus-within:border-purple-500 focus-within:shadow-lg hover:border-purple-500 hover:shadow-lg overflow-hidden">
        <input
          autoComplete="off"
          className="appearance-none focus:outline-none w-full py-4 text-gray-700 leading-tight placeholder-gray-400 placeholder:text-base placeholder:pl-0 px-0 shadow-slate-900"
          {...register?.(name, {
            required: requiredTemp,
            minLength: {
              value: 2,
              message: `${labelText} must be at least 2 characters long`,
            },
            maxLength: {
              value: 2000,
              message: `${labelText} must be at most 100 characters long`,
            },
            validate: validate,
            pattern: pattern,
          })}
          {...otherProps}
          onClick={() => setIsOptionsShowing(!isOptionsShowing)}
          onBlur={() => setIsOptionsShowing(false)}
          onChange={(e) => handleChange(e)}
        />
        {hasDropdown && isCancelShowing && (
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
        {hasDropdown && (
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
        )}
      </div>
      {hasDropdown && isOptionsShowing && (
        <div className="absolute max-h-96 overflow-auto z-50 mt-1 pt-0 flex w-[100%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl">
          {dropdownOptions?.map((item, index) => (
            <p
              key={item}
              className="my-1 block border-b border-gray-100 py-2 font-normal text-slate-700 hover:text-purple-500 hover:rounded-md md:mx-2 cursor-pointer transition-all"
              onMouseDown={(e) => selectOption(e, item)}
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
    </article>
  );
};

export default React.memo(JobDetailInput);
