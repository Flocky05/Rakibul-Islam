import React from "react";
import img1 from "../../asests/image/profile/github-50.png";
import img2 from "../../asests/image/profile/linkedin-circled-50.png";
import img3 from "../../asests/image/profile/mail-48.png";
import img4 from "../../asests/image/profile/male-user-50.png";
import img5 from "../../asests/image/profile/twitter-50.png";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 fixed top-1/2 -translate-y-1/2 left-6 z-50 gap-5">
      <a href="https://github.com/Flocky05" target="blank">
        <div>
          <img className="w-10 h-10 rounded-full" src={img1} alt="" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/rakibulislam2527/" target="blank">
        <div>
          <img className="w-10 h-10 rounded-full" src={img2} alt="" />
        </div>
      </a>
      <div>
        <img className="w-10 h-10 rounded-full" src={img3} alt="" />
      </div>
      <a
        href="https://drive.google.com/file/d/1GXtvXuihnkRckEdls9hxbQnFCLkQKQT8/view?usp=share_link"
        target="blank"
      >
        <div>
          <img className="w-10 h-10 rounded-full" src={img4} alt="" />
        </div>
      </a>
      <a href="https://twitter.com/MdRakib41325979" target="blank">
        <div>
          <img className="w-10 h-10 rounded-full" src={img5} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Profile;
