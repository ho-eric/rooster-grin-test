import React from "react";

import { images } from "../../constants";
import "./Learn.scss";

const Learn = () => {
  return (
    <div className="app__learn app__flex">
      <img src={images.banner_1} alt="learn more" />
      <div className="app__learn-container">
          <h1 className="head-text">Lorem Ipsum</h1>
          <button>Button Button</button>
      </div>
    </div>
  );
};

export default Learn;
