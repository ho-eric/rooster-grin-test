import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Explore.scss";

const Explore = () => {
  return (
    <div className="app__explore app__flex">
      <div className="app__explore-text app__flex">
        <h1 className="head-text">Lorem Ipsum</h1>
        <p className="p-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <span>>Lorem Ipsum</span>
      </div>
      <div className="app__explore-img">
        <img src={images.img_1} alt="explore" />
      </div>
    </div>
  );
};

export default Explore;
