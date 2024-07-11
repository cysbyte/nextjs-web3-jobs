import AccountOption from "@/components/account/account-option";
import SiderBar from "@/components/account/sider-bar";
import Header from "@/components/layout/Header";
import Image from "next/image";
import React, { useMemo } from "react";
import { useAccountOption } from "../store/account-option-store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <main>
      <Header />
      <section className="bg-[url('/account-banner.jpg')] h-[250px] relative w-full mx-auto">
        <div className="absolute w-full h-full flex justify-center items-center">
          <AccountOption/>
        </div>
      </section>
      <section className="container flex gap-8 mt-6">
        <SiderBar />
        <div className=" basis-4/5 p-3">{children}</div>
      </section>
    </main>
  );
};

export default React.memo(Layout);
