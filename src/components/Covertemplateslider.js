import React from "react";
// import Header from "./Header";
// import Content from "./Content";
import Slider from "./Slider";
// import Footer from './Footer';
import Breadcrumb from "./Breadcrumb";

function Convertemplateslider() {
  return (
    <div className="cover-template-slider" id="stories">
      <Slider />
      <Breadcrumb text="Contact" className="text-main" link="contact" />
    </div>
  );
}

export default Convertemplateslider;
