"use client";

import { useContext, useState } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { FormContext } from "./FormContext";
import JobDetailInput from "./JobDetailInput";
import { FormFields } from "./JobInputForm";

interface IProps {
  register: UseFormRegister<FormFields>
}

const ApplyTypeRadio = (props: IProps) => {

  const [types, setTypes] = useState([
    {
      type: "Apply by website",
      checked: true,
    },
    {
      type: "Apply by email",
      checked: false,
    },
  ]);

  const [selectedType, setSelectType] = useState("Apply by website");

  return (
    <div>
      <div className="flex gap-7 mt-4">
        {types.map((item, index) => (
          <div
            key={item.type}
            className="flex gap-2 items-center justify-center"
            onClick={() => {
              const newTypes = [...types];
              newTypes.forEach((type) => {
                type.checked = false;
                if (type.type === item.type) {
                  type.checked = true;
                }
              });
              setTypes(newTypes);
              setSelectType(item.type);
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
            name="applyWebsite"
            placeholder="https://"
            registers={props.register("applyDetail")}
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
            registers={props.register("applyDetail")}
          />
          <p className="mt-2 text-sm text-gray-500">
            Applicants will be emailed to the email address you specify to apply
            for this position
          </p>
        </div>
      )}
      <input {...props.register('applyMethod')} hidden />
    </div>
  );
};

export default ApplyTypeRadio;
