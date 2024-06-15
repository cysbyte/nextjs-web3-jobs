import Jobs from "@/components/home/jobs";
import JobsAlert from "@/components/home/jobs-alert";
import Search from "@/components/home/search";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

const page = ({ params }: { params: { skill: string } }) => {
  console.log('----', params.skill)
  return (
    <main className="container">
      <Header />
      <JobsAlert />
      <Search />
      {/* @ts-expect-error Server Component */}
      <Jobs skill={params.skill} />
      <Footer />
    </main>
  );
};

export default page;
