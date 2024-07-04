import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThirdPartyAuth from "../../../components/auth/third-party-auth";
import SignUpForm from "./sign-up-form";
import signup from "/public/signup.png";

const page = () => {
  return (
    <main className="">
      <Header />
      <div className="flex h-auto w-screen border-t">
        <div className="flex-1 basis-auto bg-[#F5F9FF] border-r flex justify-center items-center">
          <div>
            <h1 className="text-3xl">Mobile Developer Jobs</h1>
            <p className=" text-base text-gray-700 my-3">
              Join us today and find your dream job
            </p>
            <Image width='0' height='0' className="w-[300px] h-auto" src={signup} alt="" />
          </div>
        </div>
        <div className="flex-1 basis-auto pt-10 px-5">
          <h1 className="w-[90%] text-3xl text-center font-semibold">Sign Up</h1>
          {/* <ThirdPartyAuth/> */}
          <h2 className="text-center underline text-blue-500 mt-6 text-lg">Sign up as an employer</h2>
          <SignUpForm/>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
