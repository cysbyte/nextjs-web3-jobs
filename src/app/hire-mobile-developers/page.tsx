import Hero from "@/components/hire-mobile-developers/Hero";
import PostJob from "@/components/hire-mobile-developers/PostJob";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Wrapper from "@/components/layout/Wrapper";

import React from "react";

const page = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Hero />

        <PostJob />
        <Footer />
      </Wrapper>
    </>
  );
};

export default page;
