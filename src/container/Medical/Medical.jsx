import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import "./Medical.scss";

const Medical = () => {
  const [medicals, setMedicals] = useState([]);

  useEffect(() => {
    const medicalsQuery = '*[_type == "medical"]';

    client.fetch(medicalsQuery).then((data) => {
      setMedicals(data);
    });
  }, []);

  return (
    <>
      <div className="app__medical-container">
        <div className="app__medical-text">
          <h1 className="head-text">Lorem ipsum dolor sit amet</h1>
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span>>Lorem Ipsum</span>
        </div>
        <motion.div className="app__medical-list">
          {medicals?.map((medical) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__medical-item app__flex"
              key={medical.name}
            >
              <div
                className="app__flex"
                style={{
                  backgroundColor: "#fff",
                  border: " 1px solid #784cb3",
                }}
              >
                <img src={urlFor(medical.icon)} alt={medical.name} />
              </div>
              <p className="p-text">{medical.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Medical;
