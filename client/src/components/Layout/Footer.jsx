//External Lib Import
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TfiAngleUp } from "react-icons/tfi";
import { Link } from "react-router-dom";

//Internal Lib Import
import Logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-top border-bottom section-padding-top padding-bottom-40">
        <Container>
          <Row>
            <Col md={6}>
              <div className="footer-logo">
                <Link to="/">
                  <img src={Logo} className="img-fluid" alt="" />
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="footer-social">
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x={2} y={9} width={4} height={12} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-youtube"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-widget-wrapper padding-bottom-60 padding-top-80">
        <Container>
          <Row>
            <Col lg={2} sm={6}>
              <div className="footer-widget footer-shortcut-link">
                <h4>Information</h4>
                <div className="widget-inner">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} sm={6}>
              <div className="footer-widget footer-shortcut-link">
                <h4>Job Seekers</h4>
                <div className="widget-inner">
                  <ul>
                    <li>
                      <a href="#">Create Account</a>
                    </li>
                    <li>
                      <a href="#">Career Counseling</a>
                    </li>
                    <li>
                      <a href="#">My Oficiona</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Video Guides</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} sm={6}>
              <div className="footer-widget footer-shortcut-link">
                <h4>Employers</h4>
                <div className="widget-inner">
                  <ul>
                    <li>
                      <a href="#">Create Account</a>
                    </li>
                    <li>
                      <a href="#">Products/Service</a>
                    </li>
                    <li>
                      <a href="#">Post a Job</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={5} sm={6} className="offset-lg-1">
              <div className="footer-widget footer-newsletter">
                <h4>Newsletter</h4>
                <p>
                  Get e-mail updates about our latest news and Special offers.
                </p>
                <form className="newsletter-form form-inline">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address..."
                    />
                  </div>
                  <button className="btn button primary-bg">
                    Submit
                    <i className="fas fa-caret-right" />
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom-area">
        <Container>
          <Row>
            <Col>
              <div className="footer-bottom border-top">
                <Row>
                  <Col lg={5} xl={4} className="order-lg-2">
                    <div className="footer-app-download">
                      <a href="#" className="apple-app">
                        Apple Store
                      </a>
                      <a href="#" className="android-app">
                        Google Play
                      </a>
                    </div>
                  </Col>
                  <Col lg={4} xl={4} className="order-lg-1">
                    <p className="copyright-text">
                      Copyright <a href="https://www.glossyit.com">Glossy It</a>
                      2022, All right reserved
                    </p>
                  </Col>
                  <Col lg={3} xl={4} className="order-lg-3">
                    <div className="back-to-top">
                      <a href="#">
                        Back to top
                        <span>
                          <TfiAngleUp />
                        </span>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
