import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../../../images/Akib Images.png";
import { FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/my-projects"}>My Projects</Link>
      </li>
      <li>
        <Link to={"/about"}>About Me</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact Me</Link>
      </li>
      <li>
        <Link to={"/blog"}>My Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white dark:bg-gray-700 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="avatar online hidden lg:block">
          <div className="w-14 rounded-full">
            <img src={portfolio} alt="portfolio" />
          </div>
        </div>
        <Link className="btn btn-ghost" to={"/"}>
          Akib Rayhan
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          className="btn btn-info text-white btn-md"
          to={
            "https://drive.google.com/file/d/1i8cf5qixpgPsQmfkRlck1IdSHmiiAiAu/view?usp=sharing"
          }
          target="_blank"
        >
          My Resume
          <FaFileDownload className="text-2xl ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
