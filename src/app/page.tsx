import Hero from "@/components/home/Hero";
import Jobs from "@/components/home/Jobs";
import JobsAlert from "@/components/home/JobsAlert";
import Search from "@/components/home/Search";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Wrapper from "@/components/layout/Wrapper";

export default function Home() {
  return (
    <main>
      {/* <div className="bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center"> */}
      <Wrapper>
        <Header />
        <Hero />
        <JobsAlert />
        <Search />
        <Jobs />
        <Footer />
      </Wrapper>

    </main>
  );
}
