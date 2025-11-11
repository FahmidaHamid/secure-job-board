import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
// import { Bounce, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const MainPage = () => {
  return (
    <div className="min-h-screen">
      <div className="m-0 top-0">
        <NavBar></NavBar>
      </div>
      <div
        data-theme="nord"
        className="body w-screen min-h-[65vh] flex flex-row"
      >
        <Outlet className="content"></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainPage;
