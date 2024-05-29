import Hero from "@/components/hire-mobile-developers/Hero";
import PostJob from "@/components/hire-mobile-developers/PostJob";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Wrapper from "@/components/layout/Wrapper";

import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center">
        <Header />
        <Hero />
      </div>
      <Wrapper>
        <PostJob />
        <Footer />
      </Wrapper>
    </>
  );
};

export default page;
