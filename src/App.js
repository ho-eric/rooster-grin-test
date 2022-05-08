import React from "react";

import { Header, Explore, Learn, Medical, Kid, Testimonial } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Explore />
      <Learn />
      <Medical />
      <Kid />
      <Testimonial />
    </div>
  );
};

export default App;
