import React from "react";

import { Header, Explore, Learn, Medical, Kid, Testimonial, Footer } from "./container";
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
      <Footer />
    </div>
  );
};

export default App;
