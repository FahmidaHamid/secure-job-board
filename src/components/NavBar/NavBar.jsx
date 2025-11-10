import React from "react";
import { Link } from "react-router";
import transparentLogo from "../../assets/transparent-logo.png";
const NavBar = () => {
  return (
    <div
      data-theme="lemonade"
      className="navbar bg-base-100 shadow-sm sticky top-0 z-10000"
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
        <a className="btn btn-ghost sm:text-lg md:text-xl subtitle-text">
          <img
            src={transparentLogo}
            alt="logo"
            style={{ height: 60, width: 60 }}
          />
          Your Local Career Growth Hub
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default NavBar;
