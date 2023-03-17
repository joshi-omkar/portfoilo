import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navigation container">
        <div className="nav-brand">
          <NavLink to={"/"}>Omkar Joshi</NavLink>
        </div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "link" : isActive ? "link link-active" : "link"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "link" : isActive ? "link link-active" : "link"
              }
              to={"/projects"}
            >
              Projects
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "link" : isActive ? "link link-active" : "link"
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
