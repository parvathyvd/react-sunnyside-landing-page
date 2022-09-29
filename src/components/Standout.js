import React from "react";
import stand from "../images/desktop/image-stand-out.jpg";

const Standout = () => {
  return (
    <div className="transform-wrapper">
      <div className="transform-image">
        <img src={stand} alt="cup" />
      </div>
      <div className="transform-text">
        <h2>
          <span>Stand out to the right </span>
          <span> audience</span>
        </h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        Learn more
        <a href="#" className="underline orange">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Standout;
