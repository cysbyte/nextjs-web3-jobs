"use client";

import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  FieldErrors,
  UseFormRegister, UseFormSetValue
} from "react-hook-form";
import JobDetailInput from "./JobDetailInput";
import { FormFields } from "./JobInputForm";

interface IProps {
  name: keyof FormFields;
  labelText?: string;
  register: UseFormRegister<FormFields>;
  setValue?: UseFormSetValue<FormFields>;
  errors?: FieldErrors<FormFields>;
}
const ApplyTypeRadioGroup:FC<IProps> = (props) => {
  const initialTypes = useMemo(() => {
    return [
      {
        type: "Apply by website",
        checked: true,
      },
      {
        type: "Apply by email",
        checked: false,
      },
    ];
  }, []);

  const [types, setTypes] = useState(initialTypes);

  const [selectedType, setSelectType] = useState("Apply by website");

  const { name, setValue, register, errors, ...otherProps } = props;

  const checkRadio = useCallback((item: { type: string; checked: boolean }) => {
    const newTypes = [...types];
    newTypes.forEach((type) => {
      type.checked = false;
      if (type.type === item.type) {
        type.checked = true;
      }
    });
    setTypes(newTypes);
    setSelectType(item.type);
    setValue?.("applyType", item.type);
  }, []);

  useEffect(() => {
    setValue?.("applyType", "website");
  }, []);

  return (
    <div>
      <label className="block text-black text-lg font-[500]">
        How to apply <span className="text-red-alert">*</span>
      </label>
      <div
        className="flex gap-7 mt-4"
        {...register?.(name, {
          required: `Apply Type can not be empty`,
        })}
      >
        {types.map((item, index) => (
          <div
            key={item.type}
            className="flex gap-2 items-center justify-center"
            onClick={() => {
              checkRadio(item);
            }}
          >
            {!item.checked && (
              <div className="w-[19px] h-[19px] bg-white border-[1px] border-gray-400 rounded-full"></div>
            )}
            {item.checked && (
              <div className="flex items-center justify-center w-[19px] h-[19px] bg-white border-[1px] border-slate-900 rounded-full">
                <div className="w-[14px] h-[14px] bg-slate-900 rounded-full" />
              </div>
            )}
            <p>{item.type}</p>
          </div>
        ))}
      </div>
      {selectedType.indexOf("website") > -1 ? (
        <div className="mt-6">
          <JobDetailInput
            hasDropdown={false}
            name="applyUrl"
            placeholder="https://"
            register={register}
            errors={errors}
            setValue={setValue}
            pattern={{
              value:
                /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
              message: "Please enter a valid url.",
            }}
          />
          <p className="mt-2 text-sm text-gray-500">
            Applicants will be sent to the website you specify to apply for this
            position
          </p>
          
        </div>
      ) : (
        <div className="mt-6">
          <JobDetailInput
            hasDropdown={false}
            name="applyEmail"
            placeholder="Email for receiving applicants"
            register={register}
            errors={errors}
            setValue={setValue}
            pattern={{
              value:
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email.",
            }}
          />
          <p className="mt-2 text-sm text-gray-500">
            Applicants will be emailed to the email address you specify to apply
            for this position
          </p>
        </div>
      )}
      {errors?.[name] && (
        <p className=" text-sm text-red-alert mt-2">
          {errors?.[name]?.message}
        </p>
      )}
    </div>
  );
};

export default React.memo(ApplyTypeRadioGroup);
