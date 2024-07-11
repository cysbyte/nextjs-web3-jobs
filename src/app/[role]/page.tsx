import Hero from "@/components/hire-web3-developers/hero";
import JobPostForm from "@/components/hire-web3-developers/job-post-form";

import Partners from "@/components/hire-web3-developers/partner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { jobSkills } from "@/utils/skills-data";
import { startCase } from "lodash";

import React, { useMemo } from "react";

const JobsPage = ({ params }: { params: { role: string } }) => {
  let skill = params.role
    .split("-")
    .filter((item) => item !== "hire" && item !== "developers")
    .map((item) => startCase(item))
    .join(" ");
  console.log(skill);

  skill = useMemo(
    () => jobSkills.map((skill) => skill.toLowerCase()),
    []
  ).includes(skill.toLowerCase())
    ? skill
    : "";

  return params.role.startsWith("hire-") ? (
    <main>
      <Header />
      <Hero />
      <div className="container">
        <h1 className=" text-4xl text-center font-semibold"> Post A Job</h1>
        <div className="flex items-start justify-center gap-2">
          <JobPostForm skill={skill} />
          <Partners />
        </div>
      </div>
      <Footer />
    </main>
  ) : null;
};

export default JobsPage;
