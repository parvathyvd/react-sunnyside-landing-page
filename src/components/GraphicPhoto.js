import React from "react";
import graphic from "../images/desktop/image-graphic-design.jpg";
import photo from "../images/desktop/image-photography.jpg";

const GraphicPhoto = () => {
  return (
    <div className="graphic-photo">
      <div className="graphic">
        <img src={graphic} alt="cherry" />
        <div className="graphic-text">
          <h3> Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="photo">
        <img src={photo} alt="orange" />
        <div className="photo-text">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphicPhoto;
