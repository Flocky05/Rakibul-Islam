import React from "react";

const Skills = () => {
  return (
    <div className="m-24">
      <div>
        <h2 className="text-3xl text-center font-semibold p-10">Skills </h2>
      </div>
      <div className="grid place-content-center">
        <div className="grid grid-cols-4 gap-12">
          {images?.map((el, i) => (
            <img alt="" className="w-12" key={i} src={el.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

const images = [
  {
    image: require("../../asests/image/skills/bootstrap.png"),
  },
  {
    image: require("../../asests/image/skills/c++.png"),
  },
  {
    image: require("../../asests/image/skills/html-5.png"),
  },
  {
    image: require("../../asests/image/skills/inode-js-48.png"),
  },
  {
    image: require("../../asests/image/skills/tailwind-css-icon.png"),
  },
  {
    image: require("../../asests/image/skills/react2.png"),
  },
  {
    image: require("../../asests/image/skills/mongodb-48.png"),
  },
  {
    image: require("../../asests/image/skills/javascript-48.png"),
  },
  {
    image: require("../../asests/image/skills/google-firebase-console-48.png"),
  },
  {
    image: require("../../asests/image/skills/c-programming-48.png"),
  },
  {
    image: require("../../asests/image/skills/css3-48.png"),
  },
];
