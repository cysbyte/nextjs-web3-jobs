"use client";

import { authTokenActions } from "@/store/auth-slice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      const result = await response.json();
      console.log(result);
      if (response.status !== 200 && response.status !== 201)
        throw Error(result.message);
      dispatch(authTokenActions.deleteToken(null));
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <>
      <button
        className="py-3 px-6 text-start bg-deep-blue text-white rounded-md text-lg"
        onClick={handleLogout}
      >
        Confirm logout
      </button>
      {error && <p className=" text-sm text-red-alert mt-2">{error}</p>}
    </>
  );
};

export default LogoutButton;
