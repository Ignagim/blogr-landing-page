import React from "react";
import imgMobile from "../images/illustration-phone.svg";

function State() {
  return (
    <div className="state">
      <img src={imgMobile} alt="mobile" />
      <div className="state__text--container">
        <h2 className="state__title">State of the Art Infrastructure</h2>
        <p className="state__info">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
}

export default State;
