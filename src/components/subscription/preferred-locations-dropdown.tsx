"use client";

import { continents, countriesAndRegions } from "@/utils/countryData";
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface IProps {
  id: string;
}

const PreferredLocationsDropdown: FC<IProps> = (props) => {
  const [options, setOptions] = useState(countriesAndRegions);
  const [isOptionsShowing, setIsOptionsShowing] = useState(false);
  const [isCancelShowing, setIsCancelShowing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null!);

  const handleCancelClick = useCallback(() => {
    setIsCancelShowing(false);
  }, []);

  const filterOptions = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.value.trim() === "") {
        setOptions(countriesAndRegions);
        return;
      }
      setOptions(
        options.filter((option) =>
          option.toLowerCase().startsWith(e.currentTarget.value.trim())
        )
      );
    },
    [countriesAndRegions, options]
  );

  const handleSelect = useCallback((e: React.MouseEvent, item: string) => {
    e.preventDefault();
    setIsOptionsShowing(false);
    setIsCancelShowing(false);
    inputRef.current.value = item;
  }, [inputRef]);

  return (
    <div className="relative group w-auto h-auto">
      <div className="group w-full pl-2 h-auto flex bg-[#01192E] items-center border border-gray-400 focus-within:border-purple-500 focus-within:shadow-lg hover:border-purple-500 hover:shadow-lg overflow-hidden">
        <input
          ref={inputRef}
          className="appearance-none focus:outline-none w-full py-3 bg-[#01192E] text-white leading-tight placeholder-gray-400 placeholder:text-base placeholder:pl-0 px-0 shadow-slate-900"
          type="text"
          id={props.id}
          placeholder="Your Location"
          onClick={() => setIsOptionsShowing(!isOptionsShowing)}
          onBlur={() => setIsOptionsShowing(false)}
          onChange={(e) => filterOptions(e)}
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
        <div className="absolute max-h-80 overflow-auto z-50 -mt-[23rem] pt-0 flex w-[100%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl">
          {options.map((item, index) => (
            <p
              key={item}
              className="my-1 block border-b border-gray-100 py-2 font-normal text-slate-700 hover:text-purple-500 hover:rounded-md md:mx-2 cursor-pointer transition-all"
              onMouseDown={(e: React.MouseEvent) => {handleSelect(e, item)}}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(PreferredLocationsDropdown);
