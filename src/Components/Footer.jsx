import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_section1">
        <h2 style={{ color: "#185E49" }}>LET IT BEE.CO</h2>
        <h2 className="hide">
          DISCOVER THE REAL TASTE OF HONEY AND ORGANIC FOOD
        </h2>
        <h2 className="hide" style={{ fontFamily: "cursive" }}>
          with love
        </h2>
        <br></br>
        <br></br>
        <p className="hide" style={{ fontFamily: "monospace" }}>
          ©2023 Name Company.All rights reserved
        </p>
      </div>
      <div className="Footer_main">
        <div>
          SHOP
          <h4 className="social">
            <Link
              to={"/product"}
              style={{ textDecoration: "none", color: "#185E49" }}
            >
              Products
            </Link>
          </h4>
          <h4 className="social">
            <Link style={{ textDecoration: "none", color: "#185E49" }}>
              About Us
            </Link>
          </h4>
          <h4 className="social">
            <Link style={{ textDecoration: "none", color: "#185E49" }}>
              Our Blog
            </Link>
          </h4>
        </div>
        <div>
          INFO
          <h4 className="social">
            <Link style={{ textDecoration: "none", color: "#185E49" }}>
              Orders
            </Link>
          </h4>
          <h4 className="social">
            <Link style={{ textDecoration: "none", color: "#185E49" }}>
              FAQ
            </Link>
          </h4>
        </div>
        <div>
          CONTACTS
          <h4 className="social">
            <Link style={{ textDecoration: "none", color: "#185E49" }}>
              Instagram
            </Link>
          </h4>
          <h4 className="social">
            <Link style={{ textDecoration: "none", color: "#185E49" }}>
              Facebook
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
