import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar></NavBar>
      <div
        data-theme="cupcake"
        className="body w-screen min-h-[68vh] flex flex-row"
      >
        <Outlet className="content"></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
