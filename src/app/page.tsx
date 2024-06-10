import Hero from "@/components/home/hero";
import Jobs from "@/components/home/jobs";
import JobsAlert from "@/components/home/jobs-alert";
import Search from "@/components/home/search";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <main>
      {/* <div className="bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center"> */}
      <div className="container">
        <Header />
        <Hero />
        <JobsAlert />
        <Search />
        <Jobs />
        <Footer />
      </div>
    </main>
  );
}
