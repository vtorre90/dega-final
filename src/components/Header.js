import React from "react";
import Data from "./Data";
import { BrowserRouter as Link } from "react-router-dom";
import { Menu } from "react-feather";

function Header() {
  return (
    <div
    // style={{
    //   position: "fixed",
    // }}
    >
      <div className="header-main">
        <span className="text-white">
          <Data />
        </span>
        <span className="hamburger">
          <a href="/contacts">
            <button className="hamburger-btn">{/* <Menu /> */}</button>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Header;
