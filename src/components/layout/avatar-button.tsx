"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const AvatarButton = () => {
  const userId = useSelector((state: any) => state.authToken.userId);
  const accessToken = useSelector((state: any) => state.authToken.accessToken);
  const firstname = useSelector(
    (state: any) => state.authToken.firstname
  ) as string;
  const lastname = useSelector(
    (state: any) => state.authToken.lastname
  ) as string;
  console.log(userId);
  if (!userId || userId === "") return null;

  sessionStorage.setItem('accessToken', accessToken)
  console.log('----', sessionStorage.getItem('accessToken'))

  return (
    <Link
      className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center font-semibold text-white"
      href="/account/talent-profile"
    >
      {firstname.slice(0, 1).toUpperCase() + lastname.slice(0, 1).toUpperCase()}
    </Link>
  );
};

export default AvatarButton;
