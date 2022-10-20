//External Lib Import
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsArrowDownCircle } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

//Internal Lib Import
import Logo from "../../assets/images/logo.svg";
import { SetLogout } from "../../redux/slices/AuthSlice";

const Header = () => {
  const [openAccount, setOpenAccount] = useState(false);
  const [openNotify, setOpenNotify] = useState(false);

  const dispatch = useDispatch();

  const { UserDetails } = useSelector((state) => state.User);

  return (
    <header className="header-2">
      <Container>
        <Row>
          <Col>
            <div className="header-top">
              <div className="logo-area">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="header-top-toggler">
                <div className="header-top-toggler-button" />
              </div>
              <div className="top-nav" style={{ display: "flex" }}>
                
                <div
                  className="dropdown header-top-account"
                  onClick={() => setOpenAccount(!openAccount)}
                >
                  <VscAccount />
                  <span className="account-button">My Account</span>
                  <div
                    className={
                      openAccount ? "account-card  d-block" : "account-card"
                    }
                  >
                    <div className="header-top-account-info">
                      <Link
                        onClick={(e) => e.preventDefault()}
                        className="account-thumb"
                      >
                        <img
                          src={UserDetails?.Image}
                          className="img-fluid"
                          alt={UserDetails?.Email}
                        />
                      </Link>
                      <div className="account-body">
                        <h5>
                          <Link onClick={(e) => e.preventDefault()}>
                            {UserDetails?.FirstName}
                            {UserDetails?.LastName}
                          </Link>
                        </h5>
                        <span className="mail">{UserDetails?.Email}</span>
                      </div>
                    </div>
                    <ul className="account-item-list">
                      <li>
                        <Link to="/account">
                          <span className="ti-user" />
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings">
                          <span className="ti-settings" />
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link onClick={(e) => dispatch(SetLogout())}>
                          <span className="ti-power-off" />
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
