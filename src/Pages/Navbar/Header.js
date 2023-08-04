import React from "react";
import img from "../../asests/image/dp/dp6.png";
import { Typewriter } from "react-simple-typewriter";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center flex-col-reverse lg:flex-row">
        <div className="m-2 lg:m-20">
          <h2 className="md:text-4xl text-2xl font-semibold tracking-wider md:mb-10">
            <Typewriter
              words={[
                "Hey!",
                "This is Rakibul Islam",
                "A Junior Web Developer",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <a href="https://drive.google.com/file/d/1GXtvXuihnkRckEdls9hxbQnFCLkQKQT8/view?usp=share_link">
            <button className="bg-indigo-400  text-white px-5 py-2 my-2 rounded-lg">
              Resume
            </button>
          </a>
        </div>
        <div className="md:m-20 mt-10 mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 p-1 rounded-full">
          <img
            className="w-44 h-44 rounded-full lg:w-80 lg:h-80 "
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
