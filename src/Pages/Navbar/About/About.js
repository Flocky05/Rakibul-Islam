import React from "react";
import img from "../../../asests/image/dp/rakibul.JPG";

const About = () => {
  return (
    <div className=" min-h-screen m-24">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={img}
          className="md:w-1/2 w-full md:h-[37rem] h-96 object-cover rounded-lg shadow-2xl border-4 border-indigo-200"
          alt=""
        />
        <div>
          <div className="mx-auto text-xl text-justify">
            <span className="text-3xl font-semibold my-5">
              Hi, I'm Md. Rakibul Islam
            </span>
            <br />
            <br />
            I’m a Web Developer and has been learning web developing more than 1
            year now. I am studying B.Sc in Computer Science and Engineering in
            Faridpur Engineering College.
            <br />
            <br /> With the ability to learn new things and adapt in both
            self-starting and collaborative environments while staying focused
            on achieving high-quality results under strict deadlines. Eager to
            obtain a challenging position at a prestigious company. I’m very
            much interested in new technologies and problem solving.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
