"use client";

import { useCallback, useContext, useMemo, useState } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import { ActionType, FormContext } from "./FormContext";
import { FormFields } from "./JobInputForm";

interface IProps {
  name: keyof FormFields;
  labelText?: string;
  register: UseFormRegister<FormFields>;
  setValue?: UseFormSetValue<FormFields>;
  errors?: FieldErrors<FormFields>;
}

const LocationTypeRadioGroup = (props: IProps) => {
  const { state, locationTypeDispatch } = useContext(FormContext);

  const initState = useMemo(() => {
    return [
      {
        type: "Remote",
        checked: false,
      },
      {
        type: "Hybrid",
        checked: false,
      },
      {
        type: "Onsite",
        checked: false,
      },
    ];
  }, []);

  const [locationTypes, setLocationTypes] = useState(initState);

  const checkRadio = useCallback(
    (item: { type: string; checked: boolean }) => {
      const newLocationTypes = [...locationTypes];
      newLocationTypes.forEach((locationType) => {
        locationType.checked = false;
        if (locationType.type === item.type) {
          locationType.checked = true;
        }
      });
      setLocationTypes(newLocationTypes);
      locationTypeDispatch({
        type: ActionType.CHANGE_LOCATION_TYPE,
        value: item.type,
      });
      setValue?.(name, item.type);
    },
    [locationTypes, setLocationTypes, locationTypeDispatch]
  );

  const { name, labelText, setValue, register, errors, ...otherProps } = props;

  return (
    <>
      <label className="block text-black text-lg font-[500]">
        Job Location <span className="text-red-alert">*</span>
      </label>

      <div
        className="flex gap-7 mt-4"
        {...register?.(name, {
          required: `Location Type can not be empty`,
        })}
      >
        {locationTypes.map((item, index) => (
          <div
            key={item.type}
            className="flex gap-2 items-center justify-center"
            onClick={() => checkRadio(item)}
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
      {errors?.[name] && (
        <p className=" text-sm text-red-alert mt-2">
          {errors?.[name]?.message}
        </p>
      )}
    </>
  );
};

export default LocationTypeRadioGroup;
