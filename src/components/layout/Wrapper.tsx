import React, { FC } from "react";
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className="max-w-screen-2xl mx-auto px-10 md:px-24">{children}</section>;
};

export default Wrapper;
