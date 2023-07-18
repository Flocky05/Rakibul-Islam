import React from "react";
import img from "../../../asests/image/dp/rakibul.JPG";
import AnimatedText from "react-animated-text-content";

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
            {/* <span className="text-3xl font-semibold my-5">
              Hi, I'm Md. Rakibul Islam
            </span> */}
            <span className="text-3xl font-semibold ">
              <AnimatedText
                type="chars"
                interval={0.04}
                duration={0.8}
                animation={{
                  y: "100px",
                  ease: "ease-in",
                  scale: 1.86,
                }}
              >
                Md.Rakibul Islam
              </AnimatedText>
            </span>
            <br />
            <br />
            <AnimatedText
              type="chars"
              interval={0.04}
              duration={0.4}
              animation={{
                y: "100px",
                ease: "ease",
              }}
            >
              I’m a Web Developer and has been learning web developing more than
              1 year now. I am completed B.Sc in Computer Science and
              Engineering in Faridpur Engineering College. With the ability to
              learn new things and adapt in both self-starting and collaborative
              environments while staying focused on achieving high-quality
              results under strict deadlines. Eager to obtain a challenging
              position at a prestigious company. I’m very much interested in new
              technologies and problem solving.
            </AnimatedText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
