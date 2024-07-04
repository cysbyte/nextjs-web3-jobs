"use client";

import { useAccountOption } from "@/app/store/account-option-store";
import React from "react";

const AccountOption = () => {
  const option = useAccountOption((state) => state.option);
  return <h1 className="text-4xl font-normal text-deep-blue">{option}</h1>;
};

export default AccountOption;
