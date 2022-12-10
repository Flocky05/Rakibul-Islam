import React from "react";
import img from "../../asests/image/dp/dp1.JPG";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="m-20">
          <h2 className="text-3xl forn-bold">Hey,I am Junior Web Developer</h2>
          <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 m-2 rounded-lg">
            Resume
          </button>
        </div>
        <div className="m-20 bg-gradient-to-r from-indigo-600 to-pink-600 p-2 rounded-full">
          <img className="w-80 h-80 rounded-full " src={img} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
