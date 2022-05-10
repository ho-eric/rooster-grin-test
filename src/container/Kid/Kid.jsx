import React from "react";

import { images } from "../../constants";
import "./Kid.scss";

const Kid = () => {
  return (
    <div className="app__kid app__flex">
      <img src={images.banner_2} alt="smiling kid" />
      <div className="app__kid-container">
        <h1 className="head-text">Lorem Ipsum</h1>
        <p className="p-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <button>Button Button</button>
      </div>
    </div>
  );
};

export default Kid;
