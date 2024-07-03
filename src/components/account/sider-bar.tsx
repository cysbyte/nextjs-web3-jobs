"use client";

import { kebabCase } from "lodash";
import Link from "next/link";
import React, { useState } from "react";

const SiderBar = () => {
  const [selectedOption, setSelectedOption] = useState("Talent profile");
  const options = ["Talent profile", "Saved jobs", "Settings", "Logout"];
  return (
    <aside className=" basis-1/5 flex flex-col">
      {options.map((option) => (
        <div
          key={option}
          className={`p-3 rounded-sm ${
            selectedOption === option ? "bg-deep-blue text-white" : ""
          }`}
        >
          <Link
            href={`/account/${kebabCase(option)}`}
            className="w-full text-start"
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </Link>
        </div>
      ))}
    </aside>
  );
};

export default SiderBar;
