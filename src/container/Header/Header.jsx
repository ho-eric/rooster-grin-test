import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__header-text app__flex">
        {/* <img src={images.hero} alt="hero" /> */}
        <motion.h1
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="head-text"
        >
          Welcome to
          <br />
          Rooster Grin
        </motion.h1>
        <button>Button Button</button>
      </div>
    </div>
  );
};

export default Header;
