import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { client } from "../../client";

import "./Testimonial.scss";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [curIndex, setCurIndex] = useState(0);

  const handleClick = (index) => {
    setCurIndex(index);
  };

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__tesimonial app__flex">
            <div className="app__testimonial-content">
              <div className="app__testimonial-title">
                <h1 className="head-text">{testimonials[curIndex].title}</h1>
                <h2>{testimonials[curIndex].rating}</h2>
              </div>
              <div className="app__testimonial-right">
                <div className="app__testimonial-btns app__flex">
                  <div
                    className="app__flex"
                    onClick={() =>
                      handleClick(
                        curIndex === 0 ? testimonials.length - 1 : curIndex - 1
                      )
                    }
                  >
                    <HiChevronLeft />
                  </div>
                </div>
                <div className="app__testimonial-right-content">
                  <h4>{testimonials[curIndex].nameDate}</h4>
                  <p className="p-text">{testimonials[curIndex].feedback}</p>
                  <div className="app__testimonial-navigation">
                    {testimonials.map((item, index) => (
                      <div
                        className="app__testimonial-navigation-dot"
                        key={item._id}
                        style={index ===  curIndex ? { backgroundColor: "#ff9100" } : {backgroundColor: "#e3bf7d" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="app__testimonial-btns app__flex">
                  <div
                    className="app__flex"
                    onClick={() =>
                      handleClick(
                        curIndex === testimonials.length - 1 ? 0 : curIndex + 1
                      )
                    }
                  >
                    <HiChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Testimonial;
