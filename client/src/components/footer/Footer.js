import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Social from "./social1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerAddress">
        <h1 className="footerLogo"> CULINARY COLLECTIVE</h1>

        <h2>
          Open Sorcerers 🧙‍♂️ <br /> Kate, Michelle and Pax
        </h2>

        <address>404 InceptionU Lane, Calgary, AB H3H 3H3</address>
      </div>
      <ul className="footerNav">
        <li className="navItem">
          <h2 className="navTitle">Join the Collective</h2>

          <ul className="navList">
            <Link to="/signup">
              <li>Customer</li>
            </Link>

            <Link to="/restaurant/signup">
              <li>Retailer</li>
            </Link>

            <Link to="/driver/signup">Driver</Link>
          </ul>
        </li>
        <li className="navItem">
          <h2 className="navTitle">Learn More</h2>
          <ul className="navList">
            <li>About Us</li>

            <li>Mission</li>

            <li>
              <a href="mailto:?subject=Culinary Collective <3 &amp;body=Hello friend, check out this amazing site for local home based businesses and commissary kitchens! Hope you like it :)">
                Tell a Friend{" "}
              </a>
            </li>
          </ul>
        </li>
        <li className="navItem">
          <h2 className="navTitle">Connect With Us</h2>
          <ul className="navList">
            <li className="photo">
              <img src={Social} alt="social media" />
            </li>
          </ul>
        </li>
      </ul>
      <div className="bottom">
        <p>&copy; 2022 Project Three. All rights reserved.</p>

        <div className="bottomMessage">
          <span>
            put your money where your home is, shop local{" "}
            <span className="heart">♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
