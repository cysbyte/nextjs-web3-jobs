import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThirdPartyAuth from "../third-party-auth";
import SignInForm from "./sign-in-form";
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
            <Image width={300} height={200} src={signup} alt="" />
          </div>
        </div>
        <div className="flex-1 basis-auto pt-10 px-5">
          <h1 className="text-3xl text-center font-semibold">Sign In</h1>
          <ThirdPartyAuth/>
          <div className="flex gap-5 justify-between items-center">
            <div className="bg-gray-300 w-full h-[2px]"></div>
            <h3 className=" text-nowrap text-lg text-gray-700">
              Or sign in with your email
            </h3>
            <div className="bg-gray-300 w-full h-[2px]"></div>
          </div>
          <SignInForm/>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
