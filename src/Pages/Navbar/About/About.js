import React from "react";
import img from "../../../asests/image/dp/rakibul1.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen m-24">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={img}
          className="w-full rounded-lg shadow-2xl border-2 border-cyan-600 "
          alt=""
        />
        <div>
          <div className="mx-auto text-xl">
            <span className="text-3xl font-semibold my-5">
              Hi, I'm Md.Rakibul Islam
            </span>
            <br />
            I’m a Web Developer and has been learning web developing more than 1
            year now. I am studying B.Sc in Computer Science and Engineering in
            Faridpur Engineering College. With the ability to learn new things
            and adapt in both self-starting and collaborative environments while
            staying focused on achieving high-quality results under strict
            deadlines. Eager to obtain a challenging position at a prestigious
            company. I’m very much interested in new technologies and problem
            solving.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
