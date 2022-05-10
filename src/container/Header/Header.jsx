import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <img src={images.hero} alt="hero" />
      <div className="app__header-logo app__flex">
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="head-text"
        >
          <img src={images.logo_white} alt="logo" />
        </motion.div>
      </div>
      <div className="app__header-text app__flex">
        <motion.h1
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="head-text"
        >
          Welcome to
        </motion.h1>
        <motion.h2
          whileInView={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7 }}
          className="head-text"
        >
          Rooster Grin
        </motion.h2>
        <button>Button Button</button>
      </div>
    </div>
  );
};

export default Header;
