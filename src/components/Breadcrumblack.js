import React from "react";

function Breadcrumblack(props) {
  return (
    <a href={`#${props.link}`} className="main-bread">
      <div className="dot-black"></div>
      <div className="text-dot">{props.text}</div>
    </a>
  );
}
export default Breadcrumblack;
