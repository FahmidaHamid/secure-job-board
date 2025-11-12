import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="app-container">
      <div className="m-0 top-0">
        <NavBar></NavBar>
      </div>
      <div data-theme="nord" className="main-content grow">
        <Outlet className="content"></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainPage;
