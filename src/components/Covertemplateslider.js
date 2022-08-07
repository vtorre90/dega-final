import React from "react";
// import Header from "./Header";
// import Content from "./Content";
import Slider from './Slider';
// import Footer from './Footer';
import Breadcrumb from "./Breadcrumb";

function Convertemplateslider(){
    return(
        <div className="cover-template-slider">
            <Slider />
            <Breadcrumb text="Contact"/>
        </div>
    );
}

export default Convertemplateslider;