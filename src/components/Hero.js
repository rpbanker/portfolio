import React from "react";

const Hero = () => {
  return (
    <section className="hero custom-container">
      <div className="text-wrapper">
        <h1 className="main-title">
          Hello, I am andrew <br></br> a{" "}
          <span className="highlighting">
            Computer Science student
            <div className="highlighter"></div>
          </span>
        </h1>
        <p className="sub-title">I love creating beautiful things</p>
      </div>
    </section>
  );
};

export default Hero;
