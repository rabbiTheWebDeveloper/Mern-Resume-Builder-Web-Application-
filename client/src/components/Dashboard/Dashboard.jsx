//External Lib Import
import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { FaEdit, FaHome, FaPowerOff, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Internal Lib Import
import { SetLogout } from "../../redux/slices/AuthSlice";

const Dashboard = () => {
  return (
    <>
      <div className="alice-bg padding-top-70 padding-bottom-70">
        <Container>
          <Row>
            <Col md={6}>
              <div className="breadcrumb-area">
                <h1>Candidates Dashboard</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      <Link to="/dashboard">Candidates Dashboard</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="alice-bg section-padding-bottom">
        <Container className="no-gliters">
          <Row className="no-gliters">
            <Col>
              <div className="dashboard-container">
                <div className="dashboard-content-wrapper"></div>
                <LeftBar />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;

const LeftBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const { UserDetails } = useSelector((state) => state.User);
  return (
    <div className="dashboard-sidebar">
      <div className="user-info">
        <div className="thumb">
          <img
            src={UserDetails?.Image}
            className="img-fluid"
            alt={UserDetails?.Email}
          />
        </div>
        <div className="user-body">
          <h5>
            {UserDetails?.FirstName}
            {UserDetails?.LastName}
          </h5>
          <span>{UserDetails?.Email}</span>
        </div>
      </div>
      <div className="profile-progress">
        <div className="progress-item">
          <div className="progress-head">
            <p className="progress-on">Profile</p>
          </div>
          <div className="progress-body">
            <div className="progress">
              <div
                className="progress-bar animated"
                role="progressbar"
                aria-valuenow={70}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "70%" }}
              />
            </div>
            <p className="progress-to">70%</p>
          </div>
        </div>
      </div>
      <div className="dashboard-menu">
        <ul>
          <li>
            <Link to="/">
              <i className="mr-3">
                <FaHome />
              </i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/account">
              <i className="mr-3">
                <FaEdit />
              </i>
              Edit Profile
            </Link>
          </li>
        </ul>
        <ul className="delete">
          <li>
            <Link onClick={(e) => dispatch(SetLogout())}>
              <i className="mr-3">
                <FaPowerOff />
              </i>
              Logout
            </Link>
          </li>
          <li>
            <Link onClick={handleShow}>
              <i className="mr-3">
                <FaTrashAlt />
              </i>
              Delete Profile
            </Link>
          </li>
        </ul>

        <Modal
          show={show}
          onHide={handleClose}
          className="modal fade modal-delete"
          id="modal-delete"
        >
          <Modal.Body>
            <h4>
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
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
              </svg>
              Delete Account
            </h4>
            <p>
              Are you sure! You want to delete your profile. This can't be
              undone!
            </p>
            <form action="#">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="delete-button"
                  onClick={handleClose}
                >
                  Save Update
                </button>
                <button type="button" onClick={handleClose}>
                  Cancel
                </button>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  defaultChecked=""
                />
                <label className="form-check-label">
                  You accepts our
                  <Link to="/terms-and-conditions">
                    Terms and Conditions
                  </Link>{" "}
                  and <Link to="/privacy-policy">Privacy Policy</Link>
                </label>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
