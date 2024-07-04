'use client';

import React from "react";
import { useSelector } from "react-redux";

const EmailText = () => {
  const email = useSelector((state: any) => state.authToken.email);

  return <div className="text-left">{email}</div>;
};

export default EmailText;
