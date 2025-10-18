import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  const handleMenuClick = (section) => {
    setMenu(section);
    setOpen(false); // close menu after click (mobile)
  };

  return (
    <div className="navbar">
      {/* <img src={logo} alt="Logo" /> */}
      <h1>Murali v</h1>

      {/* Hamburger Icon for Mobile */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
            {menu === "home" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
            {menu === "about" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleMenuClick("services")}>Services</p>
            {menu === "services" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#mywork">
            <p onClick={() => handleMenuClick("portfolio")}>Portfolio</p>
            {menu === "portfolio" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
            {menu === "contact" && <img src={underline} alt="" />}
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
