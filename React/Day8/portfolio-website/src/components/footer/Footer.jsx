import React from "react";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi
            debitis vitae obcaecati ab aliquam suscipit, nisi facere hic dolores
            odit, rerum dicta. Nesciunt mollitia, dignissimos corrupti deleniti
            maxime sequi.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 John Doe. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
