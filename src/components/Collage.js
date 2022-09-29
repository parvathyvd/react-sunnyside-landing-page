import React from "react";
import cone from "../images/desktop/image-gallery-cone.jpg";
import bottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import cubes from "../images/desktop/image-gallery-sugarcubes.jpg";

const Collage = () => {
  return (
    <div className="collage">
      <img src={bottles} alt="bottles" />
      <img src={orange} alt="orange" />
      <img src={cone} alt="cone" />
      <img src={cubes} alt="cubes" />
    </div>
  );
};

export default Collage;
