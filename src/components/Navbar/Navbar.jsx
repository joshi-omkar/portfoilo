import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navigation container">
        <div className="nav-brand">
          <a href="/">Omkar Joshi</a>
        </div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link link-active" href="/project.html">
              Projects
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="/blogs.html">
              Blogs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
