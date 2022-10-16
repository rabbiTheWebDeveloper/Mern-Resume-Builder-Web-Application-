//External Lib Import
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib Import
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header-2 access-page-nav">
      <Container>
        <Row>
          <Col>
            <div className="header-top">
              <div className="logo-area">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="top-nav" style={{ display: "flex" }}>
                <Link to="/register" className="account-page-link mr-3">
                  Register
                </Link>
                <Link to="/login" className="account-page-link">
                  Login
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
