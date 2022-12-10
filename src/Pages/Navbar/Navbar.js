import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <h2 className="text-3xl fornt-bold">Rakibul Islam</h2>
        </div>
        <div className="flex-none">
          <ul className=" menu-horizontal p-3">
            <li>
              <a href="/" className="p-3">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="p-3">
                About
              </a>
            </li>
            <li>
              <a href="/" className="p-3">
                Projects
              </a>
            </li>
            <li>
              <a href="/" className="p-3">
                Skills
              </a>
            </li>
            <li>
              <a href="/" className="p-3">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
