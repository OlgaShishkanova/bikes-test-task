import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/MainLayout";
import BikeTestPage from "./pages/BikeTest/BikeTestPage";
import Home from "./pages/Home/Home";
import BikesList from "./pages/BikesList/BikesList";

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout noClass={true}>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/test"
          element={
            <MainLayout>
              <BikeTestPage />
            </MainLayout>
          }
        />
         <Route
          path="/bikes"
          element={
            <MainLayout>
              <BikesList />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};
export default RoutesComponent;
