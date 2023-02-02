import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            <span className="text-indigo-600">Rakibul</span> Islam
          </h2>
        </div>
        <div className="flex-none">
          <ul className=" menu-horizontal p-3">
            <li>
              <a href="#home" className="p-3">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="p-3">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="p-3">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="p-3">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="p-3">
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
