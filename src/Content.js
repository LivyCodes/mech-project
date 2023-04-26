import React from "react";
import "./Content.css";
import LeftNavBar from "./Navbar";
import Containers from "./Containers";

function ContentBody() {
  return (
    <div className="wrapper">
      <div className="navigation">
        <LeftNavBar />
      </div>
      <div className="main">
        <div>
          <h1>BIRECH MOBILE MECHANIC</h1>
          <p>Hello!! xnbsdiji guikbhgt hdfgikjgrf </p>
          <Containers />
        </div>
      </div>
    </div>
  );
}

export default ContentBody;
