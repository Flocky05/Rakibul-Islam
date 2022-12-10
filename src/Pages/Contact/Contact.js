import React from "react";

const Contact = () => {
  return (
    <div className="p-28" id="contact">
      <div>
        <h2 className="text-2xl font-semibold text-center">CONTACT</h2>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full md:min-w-[550px] shadow-2xl bg-pink-200">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div>
                <textarea
                  name="write some thing"
                  id=""
                  placeholder="Write your message"
                  className="input input-bordered pt-2 w-full"
                  rows="30"
                ></textarea>
              </div>
              <div className="form-control mt-4">
                <button className="bg-pink-300 text-white px-5 py-2 m-2 rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
