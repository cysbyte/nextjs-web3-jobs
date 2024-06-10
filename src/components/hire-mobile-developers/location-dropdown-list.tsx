'use client'

import React, { FC } from "react";

interface IProps {
  options: string[];
  handleSelect: (e: React.MouseEvent, item: string) => void;
}

const LocationDropdownList: FC<IProps> = (props) => {
  console.log("dropdownlist");
  return (
    <div className="absolute max-h-96 overflow-auto z-50 mt-1 pt-0 flex w-[100%] flex-col bg-white py-1 px-4 rounded-md text-gray-800 shadow-xl">
      {props.options.map((item, index) => (
        <p
          key={item}
          className="my-1 block border-b border-gray-100 py-2 font-normal text-slate-700 hover:text-purple-500 hover:rounded-md md:mx-2 cursor-pointer transition-all"
          onMouseDown={(e: React.MouseEvent) => props.handleSelect(e, item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default React.memo(LocationDropdownList);
