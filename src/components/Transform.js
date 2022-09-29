import React from "react";
import egg from "../images/desktop/image-transform.jpg";

const Transform = () => {
  return (
    <div className="transform-wrapper">
      <div className="transform-text">
        <h2>
          <span>Transform your </span>
          <span> brand</span>
        </h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a href="#" className="underline yellow">
          Learn more
        </a>
      </div>
      <div className="transform-image">
        <img src={egg} alt="Egg" />
      </div>
    </div>
  );
};

export default Transform;
