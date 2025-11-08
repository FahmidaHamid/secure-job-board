import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import LeftSidePanel from "../../components/LeftSidePanel/LeftSidePanel";

const categoryPromise = fetch("http://localhost:3000/all-categories").then(
  (res) => res.json()
);

const MainPage = () => {
  return (
    <div className=" min-h-screen">
      <NavBar></NavBar>
      <div
        data-theme="autumn"
        className="w-screen min-h-[68vh] flex flex-row app-container"
      >
        <LeftSidePanel categoryPromise={categoryPromise}></LeftSidePanel>
        <Outlet className="content"></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
