import React from "react";
import Tanya from "../coding-bootcamp-testimonials-slider-master/images/image-tanya.jpg";
import "./Slide1.css";

export default function Slide1() {
  return (
    <div>
      <div className="slide1">
        <img className="tanya-picture" src={Tanya} />
      </div>
      <div className="info1">
        <h3 className="txt-h3">
          “ I've been interested in coding for a while but never taken the jump,
          until now. I couldn't recommend this course enough. I'm now in the job
          of my dreams and so excited about the future. ”
        </h3>
        <h4 className="txt-h4" >Tanya Sinclair</h4>
        <p className="txt-p" >UX Engineer</p>
      </div>
   
    </div>
  );
}
