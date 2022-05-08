import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div

        className="app__header-img"
      >
          <img src={images.hero} alt="hero image" />
          <h1 className="head-text">
            Welcome to Rooster Grin
          </h1>
          <button>
              Button Button
          </button>
      </motion.div>
    </div>
  );
};

export default Header;
