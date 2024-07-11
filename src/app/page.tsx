import EmailMessage from "@/components/home/email-message";
import Hero from "@/components/home/hero";
import Jobs from "@/components/home/jobs";
import JobsAlert from "@/components/home/jobs-alert";
import Search from "@/components/home/search";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      {/* <div className="bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center"> */}
      <div>
        <EmailMessage/>
        <Header />
        <Hero />
        <JobsAlert />
        <Search />
        {/* @ts-ignore */}
        <Jobs />
        <Footer />
      </div>
    </main>
  );
}
