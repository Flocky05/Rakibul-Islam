import React from "react";
import { projects } from "../../asests/data/projectData";

const Project = () => {
  return (
    <div id="projects">
      <div className="text-3xl font-semibold text-center p-7">
        <h2>Here are some projects</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects?.map((el) => (
          <div className="card bg-pink-100/30 card-compact w-full shadow-xl">
            <figure>
              <img src={el.img} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{el.name}</h2>
              <div className="flex  ">
                <div>
                  <a href={el.liveLink} target="blank">
                    <button className="bg-pink-400  text-white px-5 py-2 m-2 rounded-lg font-semibold">
                      Live link
                    </button>
                  </a>
                </div>
                <div>
                  <a href={el.githubLink} target="blank">
                    {" "}
                    <button className="bg-white  text-pink-400 border border-pink-400 px-5 py-2 m-2 rounded-lg font-semibold">
                      Code link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
