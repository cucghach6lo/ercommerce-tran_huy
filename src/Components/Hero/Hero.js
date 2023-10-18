import React, { useContext, useState } from "react";

import "./Hero.css";
const Hero = () => {
  // const Array = [1, 2, 3, 4, 5];
  // const slicedArray = originalArray.slice(1, 4);

  return (
    <div className="hero-container w-full flex gap-y-8 justify-center items-center flex-wrap">
      <img
        src="https://theme.hstatic.net/200000411281/1000949882/14/home_slider_image_1.jpg?v=240"
        height={100}
      />
    </div>
  );
};

export default Hero;
