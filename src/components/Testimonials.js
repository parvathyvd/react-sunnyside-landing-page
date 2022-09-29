import React from "react";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3>Client testimonials</h3>
      <div className="clients">
        <div className="client">
          <img src={emily} alt="Emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <small>Marketing Director</small>
        </div>

        <div className="client">
          <img src={thomas} alt="Emily" />
          <p>
            {" "}
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <small>Chief Operating Officer</small>
        </div>
        <div className="client">
          <img src={jennie} alt="Emily" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F. </h4>
          <small>Business Owner.</small>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
