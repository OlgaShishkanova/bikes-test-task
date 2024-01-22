import React from "react";
import NavigationBar from "./NavigationBar";

interface Props {
  children: React.ReactNode;
  noClass?: boolean;
}

const MainLayout: React.FC<Props> = ({ children, noClass }) => {
  return (
    <>
      <NavigationBar />
      <div className={`${noClass ? "" : "routes-wrapper"}`}>{children}</div>
    </>
  );
};

export default MainLayout;
