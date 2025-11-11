import React from "react";
import { Link } from "react-router";
import ShinyText from "../ShinyText/ShinyText";

import transparentLogo from "../../assets/transparent-logo.png";
import { toast } from "react-toastify";
import { useAuth } from "../../provider/AuthProvider";
import {
  FaHouseCircleCheck,
  FaHouseCircleExclamation,
  FaUserCheck,
  FaUserSecret,
} from "react-icons/fa6";
import "./NavBar.css";

const NavBar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async (event) => {
    await logout()
      .then(() => {
        //console.log("logged out successfully");
        toast("Come back soon!!!");
      })
      .error((e) => {
        //console.log(e);
      });
  };
  return (
    <div
      data-theme="lemonade"
      className="navbar bg-base-100 shadow-sm fixed-nav"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu z-100 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li onClick={() => document.activeElement.blur()}>
              <Link to="/">Homepage</Link>
            </li>
            <li onClick={() => document.activeElement.blur()}>
              <Link to="/all-jobs">All Jobs</Link>
            </li>
            <li onClick={() => document.activeElement.blur()}>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="../">
          <a className="btn btn-ghost sm:text-lg md:text-xl subtitle-text">
            <img
              src={transparentLogo}
              alt="logo"
              style={{ height: 60, width: 60 }}
            />
            <ShinyText
              text="Your Local Career Growth Hub"
              disabled={false}
              speed={3}
              className="custom-class hide-on-mobile"
            />
          </a>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hide-on-mobile">
          {currentUser && (
            <p className="md:font-semibold sm: text-sm pr-2">
              Hello, {currentUser.email.split("@")[0]}
              {"  "}
            </p>
          )}
        </div>
        <div className="pl-1 pr-2.5">
          {currentUser ? (
            <p
              onClick={handleLogout}
              className="btn btn-info bg-[linear-gradient(to_right,#e6f7b4,#eaaeae)] flex flex-1 items-center justify-center w-[108px] p-2 rounded-xl"
            >
              <FaHouseCircleExclamation size={24} />
              Logout
            </p>
          ) : (
            <Link to="../auth/login">
              <p className="btn btn-info bg-[linear-gradient(to_right,#e6f7b4,#eaaeae)] flex flex-1 items-center justify-center w-[108px] p-2 rounded-xl">
                <FaUserSecret size={24} />
                Guest
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
