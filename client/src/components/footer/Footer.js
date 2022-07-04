import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Social from "./social1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerAddress">
        <h1 className="footerLogo"> Chef Hire</h1>

      
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
          <Link to="/onepager">
            <li className="navTitle">Learn More</li>
          </Link>
          <ul className="navList">
            <Link to="/onepager">
              <li>About Us</li>
            </Link>

            <Link to="/onepager">
              <li>Mission</li>
            </Link>

            <li>
              <a href="mailto:?subject=CHEF-HIRE <3 &amp;body=Hello friend, check out this amazing site for local home based businesses and commissary kitchens! Hope you like it :)">
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
        <p>2022. All rights reserved.</p>

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
