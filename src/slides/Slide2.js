import React from "react";
import "./Slide2.css";
import John from "../coding-bootcamp-testimonials-slider-master/images/image-john.jpg";

export default function Slide2() {
  return (
    <div>
      <div className="slide2">
        <img className="boy-picture" src={John} />
      </div>
      <div className="info2">
        <h3 className="txt2-h3">
          “ If you want to lay the best foundation possible I’d recommend taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer. ”
        </h3>
        <h4 className="txt2-h4">John Tarkpor</h4>
        <p className="txt2-p">Junior Front-end Developer</p>
      </div>
    </div>
  );
}
