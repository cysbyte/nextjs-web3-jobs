"use client";

import { kebabCase } from "lodash";
import Link from "next/link";
import React from "react";

interface IProps {
  skill: string;
}

const SearchOption = (props: IProps) => {
  const getUrl = (skill: string) => {
    let url;
    skill = kebabCase(skill);
    if (skill === "all-jobs") {
      url = "/jobs";
    } else {
      url =  "/jobs/" + skill;
    }
    return url;
  };

  return (
    <Link
      href={getUrl(props.skill)}
      className="border px-4 py-2 rounded-md border-gray-500 text-gray-700 bg-white hover:bg-purple-500 hover:text-white hover:border-purple-50 transition-all"
      key={props.skill}
    >
      {props.skill}
    </Link>
  );
};

export default SearchOption;
