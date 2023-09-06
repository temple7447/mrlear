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
            Welcome to the official website of Engr. Mr. RASHEED, a distinguished Computer Engineering Lecturer at Auchi Polytechnic. With over 6 years of dedicated experience in the field of computer engineering, Mr. RASHEED has been at the forefront of education and research, shaping the future of aspiring engineers.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                rousman@auchipoly.edu.ng
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +2348064029436
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
             Temple +2347011951761
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
