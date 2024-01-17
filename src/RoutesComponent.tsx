import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/MainLayout";
import BikeTest from "./pages/BikeTest/BikeTest";

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <BikeTest />
            </MainLayout>
          }
        />
        {/* <Route
          path="/bikes"
          element={
            <MainLayout>
              <CategoriesList />
            </MainLayout>
          }
        />
         <Route
          path="/cart"
          element={
            <MainLayout>
              <CategoriesList />
            </MainLayout>
          }
        /> */}
      </Routes>
    </Router>
  );
};
export default RoutesComponent;
