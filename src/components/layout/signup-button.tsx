'use client';

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const SignupButton = () => {
  const userId = useSelector((state: any) => state.authToken.userId);
    const firstname = useSelector((state: any) => state.authToken.firstname);
    console.log(userId)
  if (userId && userId !== '') return null;

  return (
    <Link
      className="px-3 py-2 border border-gray-800 rounded-md"
      href="/signup"
    >
      Sign Up
    </Link>
  );
};

export default SignupButton;
