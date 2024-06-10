import Image from "next/image";
import React, { FC } from "react";
import partner0 from "/public/partners/0.jpg";
import partner1 from "/public/partners/1.jpg";
import partner2 from "/public/partners/2.jpg";
import partner3 from "/public/partners/3.jpg";
import partner4 from "/public/partners/4.jpg";
import partner5 from "/public/partners/5.jpg";
import partner6 from "/public/partners/6.jpg";

const Partners:FC = () => {
  return (
    <section className="basis-1/3 py-24 w-full h-full">
      <div className="w-auto h-full">
        <h1 className="w-full text-center text-lg font-semibold">Trusted by</h1>
        <div className="flex flex-wrap mx-auto mt-16 gap-5 w-[300px] justify-center items-center">
          <div className=" rounded-full overflow-hidden">
            <Image src={partner0} width={80} height={80} alt="" />
          </div>
          <Image src={partner1} width={50} height={50} alt="" />
          <Image src={partner2} width={60} height={60} alt="" />

          <div className=" rounded-full overflow-hidden">
            <Image src={partner3} width={70} height={70} alt="" />
          </div>
          <Image src={partner4} width={70} height={70} alt="" />
          <Image src={partner6} width={60} height={50} alt="" />
          <Image src={partner5} width={50} height={50} alt="" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Partners);
