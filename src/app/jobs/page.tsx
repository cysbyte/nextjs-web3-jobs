import Jobs from "@/components/home/jobs";
import JobsAlert from "@/components/home/jobs-alert";
import Search from "@/components/home/search";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

const page = () => {
  return (
    <main className="container">
      <Header />
      <JobsAlert />
      <Search />
      {/* @ts-ignore */}
      <Jobs />
      <Footer />
    </main>
  );
};

export default page;
