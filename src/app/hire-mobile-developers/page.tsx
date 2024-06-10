import Hero from "@/components/hire-mobile-developers/hero";
import JobPostForm from "@/components/hire-mobile-developers/job-post-form";

import Partners from "@/components/hire-mobile-developers/partner";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import React from "react";

const page = () => {
  return (
      <div className="container">
        <Header />
        <Hero />
        <div className="flex items-start justify-center gap-2">
        <JobPostForm/>
        <Partners/>   
        </div>
        <Footer />  
      </div>
  );
};

export default page;
