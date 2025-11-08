import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className=" min-h-screen">
      <NavBar></NavBar>
      <div data-theme="autumn" className="w-[90vw] min-h-[68vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
