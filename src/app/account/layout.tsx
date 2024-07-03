import SiderBar from "@/components/account/sider-bar";
import Header from "@/components/layout/header";
import Image from "next/image";
import React, { useMemo } from "react";
import banner from "/public/account-banner.jpg";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main>
    <Header />
    <section className="w-full mx-auto">
      <Image
        width={0}
        height={0}
        src={banner}
        alt=""
        style={{ width: "100%", maxHeight: "250px" }}
      />
    </section>
    <section className="container flex gap-8 mt-6">
      <SiderBar />
      <div className=" basis-4/5 p-3">
        {children}
      </div>
    </section>
  </main>
  );
};

export default Layout;