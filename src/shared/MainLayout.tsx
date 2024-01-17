import React from "react";
import NavigationBar from "./NavigationBar";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className="routes-wrapper">{children}</div>
    </>
  );
};

export default MainLayout;
