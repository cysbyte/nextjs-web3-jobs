import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="m-auto w-full">
        {children}
    </div>
  );
};

export default Layout;