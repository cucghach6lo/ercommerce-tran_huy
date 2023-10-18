import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="f-container bg-slate-300">
        {/* left side */}
        <div className="center f-left">
          <span className="secondaryText">
            Test
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText"></span>
          <span className="secondaryText"></span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;