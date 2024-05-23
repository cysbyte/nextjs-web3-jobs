import Header from "@/components/layout/Header";
import Test from "@/components/layout/Test";
import Hero from "@/components/sections/Hero";
import Jobs from "@/components/sections/Jobs";
import JobsAlert from "@/components/sections/JobsAlert";
import Search from "@/components/sections/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center">
        <Header />
        <Hero />
      </div>
      <JobsAlert/>
      <Search /> 
      <Jobs/>

    </main>
  );
}
