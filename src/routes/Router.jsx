import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage/MainPage";
import { Component } from "react";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import AboutUs from "../pages/AboutUs/AboutUs";
import Loader from "../components/Loader/Loader";
import JobDetails from "../pages/JobDetails/JobDetails";
import CategoryWiseCollection from "../pages/CategoryWiseCollection/CategoryWiseCollection";
import Login from "../components/LoginAndSignup/Login";
import Register from "../components/LoginAndSignup/Register";
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
        // loader: () => fetch("http://localhost:3000/all-categories"),
      },
      {
        path: "/all-jobs",
        Component: AllJobs,
      },
      // {
      //   path: "jobs/:category",
      //   Component: CategoryWiseCollection,
      // },
      {
        path: "/job-details/:id",
        Component: JobDetails,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
