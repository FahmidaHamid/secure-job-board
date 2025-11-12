import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <div className="m-0 top-0">
        <NavBar></NavBar>
      </div>
      <div data-theme="nord" className="body w-screen main-content">
        <Outlet className="content"></Outlet>
      </div>
      <div></div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
