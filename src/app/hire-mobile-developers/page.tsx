import Hero from "@/components/hire-mobile-developers/Hero";
import Partners from "@/components/hire-mobile-developers/Partners";
import PostJob from "@/components/hire-mobile-developers/PostJob";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import React from "react";

const page = () => {
  return (
      <div className="container">
        <Header />
        <Hero />
        <div className="flex items-start justify-center gap-2">
        <PostJob />
        <Partners/>   
        </div>
        <Footer />  
      </div>
  );
};

export default page;
