import React, { useState, useEffect } from "react";

import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <p className="p-text">Follow Us:</p>
      <div className="app__footer-icons">
        <div className="app__flex">
          <images.Instagram  style={{fill:"#784cb3"}} />
        </div>
        <div className="app__flex">
          <images.Facebook style={{fill:"#784cb3"}} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
