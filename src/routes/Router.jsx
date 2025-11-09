import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage/MainPage";
import { Component } from "react";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import AboutUs from "../pages/AboutUs/AboutUs";
import Loader from "../components/Loader/Loader";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    HydrateFallback: () => {
      <Loader />;
    },
    children: [
      {
        index: 1,
        Component: Home,
        loader: () => fetch("http://localhost:3000/all-categories"),
      },
      {
        path: "/all-jobs",
        Component: AllJobs,
        // loader: () => fetch("http://localhost:3000/all-jobs"),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
    ],
  },
]);

export default router;
