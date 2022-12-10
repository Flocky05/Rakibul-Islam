import React from "react";
import img from "../../asests/image/dp/dp1.JPG";

export const Header = () => {
  return (
    <div>
      <div className="flex space-around grid-cols-2">
        <div>
          <h2 className="text-3xl forn-bold">Hey,Guys</h2>
        </div>
        <div>
          <img
            className="w-64 h-64 rounded-full border-8 bg-cyan-300"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
