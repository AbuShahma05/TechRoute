import React from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 shadow-xl w-full bg-green-200 h-12  ">
        <div className="flex items-center">

          <IoReorderThreeOutline size={50} className="ml-32" />

          <h1 className=" pl-20 font-semibold text-xl">TechRoute</h1>
          <ul className="flex space-x-20">
            <li>
            </li>
            <li className=" font-semibold text-lg">
              <Link to="/">Roadmaps</Link>
            </li>
            <li className=" font-semibold text-lg">
              <Link to="/theory">Theory</Link>
            </li>
            <li className=" font-semibold text-lg">
              <Link to="/ai-resume">AI Resume Review</Link>
            </li>
            <li className=" font-semibold text-lg">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
