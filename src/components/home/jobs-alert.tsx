import React, { FC } from "react";
import CustomInput from "../shared/custom-input";

const JobsAlert: FC = () => {
  return (
    <form className="container mt-20 w-full py-32 bg-slate-100 rounded-3xl">
      <h1 className=" text-[2rem] font-semibold text-center">
        Looking for your next web3 development job?
      </h1>
      <p className=" font-normal text-lg text-center mt-4 text-slate-500">
        Join us and get new web3 jobs email alerts{" "}
      </p>
      <div className="flex w-2/4 mt-10 mx-auto gap-1">
        <input
          className="appearance-none border-[1px] focus:outline-dotted focus:outline-purple-500 rounded-l-md py-4 text-gray-700 leading-tight placeholder-gray-500 placeholder:text-lg placeholder:pl-0 px-3  w-3/4"
          id="email"
          name="email"
          type="text"
          placeholder="Email Address"
        />
        <button
          className="px-10 py-2 bg-purple-500 hover:bg-purple-600 rounded-r-md text-white transition-all"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default React.memo(JobsAlert);
