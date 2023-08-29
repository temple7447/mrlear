import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                example@example.com
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +1-555-555-5555
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-start">
              <li className="me-3">
                <Link to='/Dashboard'>
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li className="me-3">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="me-3">
                <a href="#">

                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center text-muted pb-3">
          <small>
            &copy; 2023 Company Name. All rights reserved. | Designed by{" "}
            <a href="#" className="text-light">
              Your Name
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
