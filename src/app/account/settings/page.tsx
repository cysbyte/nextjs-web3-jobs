import Link from "next/link";
import React from "react";
import EmailText from "./email-text";

const page = () => {
  return (
    <article>
      <h1 className="text-lg font-bold">Account information</h1>
      <div className="my-10">
        <div className="flex justify-between items-center">
          <h3>Email</h3>
          <EmailText />
          <Link href="" className="px-6 py-2 border border-black rounded-md">
            Change email
          </Link>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <h3>Password</h3>
          <p className="text-left">**********</p>
          <Link href="" className="px-6 py-2 border border-black rounded-md">
            Change password
          </Link>
        </div>
        <div className="mt-5">
          <button className="px-6 py-2 border border-red-alert border-black rounded-md text-red-alert">
            Delete account
          </button>
        </div>
      </div>
    </article>
  );
};

export default React.memo(page);
