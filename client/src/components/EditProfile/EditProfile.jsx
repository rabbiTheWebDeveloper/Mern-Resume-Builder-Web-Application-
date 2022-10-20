//External Lib Import
import { lazy, Suspense, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEdit, FaHome, FaPowerOff, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Internal Lib Import
import { SetLogout } from "../../redux/slices/AuthSlice";
import LazyLoader from "../Common/LazyLoader";
import OtherInformation from "./OtherInformation/OtherInformation";
const Employment = lazy(() => import("./Employment/Employment"));
const PersonalInfo = lazy(() => import("./PersonalInfo/PersonalInfo"));
const EducationTraining = lazy(() =>
  import("./EducationTraining/EducationTraining"),
);

const EditProfile = () => {
  const [category, setCategory] = useState("PersonalInfo");
  const dispatch = useDispatch();
  const { UserDetails } = useSelector((state) => state.User);

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
                    <li className="breadcrumb-item active">
                      <Link to="/account">Personal Info</Link>
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
                <div className="dashboard-content-wrapper">
                  <ViewProfileForm categoryName={category} />
                </div>
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
                  <div className="dashboard-menu">
                    <ul>
                      <li>
                        <Link
                          className={
                            category === "PersonalInfo" ? "active" : ""
                          }
                          onClick={() => setCategory("PersonalInfo")}
                        >
                          <i className="mr-3">
                            <FaHome />
                          </i>
                          Personal Info
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            category === "EducationTraining" ? "active" : ""
                          }
                          onClick={() => setCategory("EducationTraining")}
                        >
                          <i className="mr-3">
                            <FaEdit />
                          </i>
                          Education/Training
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={category === "Employment" ? "active" : ""}
                          onClick={() => setCategory("Employment")}
                        >
                          <i className="mr-3">
                            <FaEdit />
                          </i>
                          Employment
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            category === "OtherInformation" ? "active" : ""
                          }
                          onClick={() => setCategory("OtherInformation")}
                        >
                          <i className="mr-3">
                            <FaEdit />
                          </i>
                          Other Information
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
                        <Link>
                          <i className="mr-3">
                            <FaTrashAlt />
                          </i>
                          Delete Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EditProfile;

const ViewProfileForm = ({ categoryName }) => {
  if (categoryName === "PersonalInfo") {
    return (
      <Suspense fallback={<LazyLoader />}>
        <PersonalInfo />
      </Suspense>
    );
  }
  if (categoryName === "EducationTraining") {
    return (
      <Suspense fallback={<LazyLoader />}>
        <EducationTraining />
      </Suspense>
    );
  }
  if (categoryName === "Employment") {
    return (
      <Suspense fallback={<LazyLoader />}>
        <Employment />
      </Suspense>
    );
  }
  if (categoryName === "OtherInformation") {
    return (
      <Suspense fallback={<LazyLoader />}>
        <OtherInformation />
      </Suspense>
    );
  }
};

// const ViewProfileForm = ({ categoryName, values }) => {
//   if (categoryName === "PersonalInfo") {
//     return <Personal {...values} />;
//   }
//   if (categoryName === "EducationTraining") {
//     return <EducationTraining {...values} />;
//   }
//   if (categoryName === "Employment") {
//     return <Employment {...values} />;
//   }
//   if (categoryName === "OtherInformation") {
//     return <OtherInformation {...values} />;
//   }
//   if (categoryName === "Photograph") {
//     return <Photograph {...values} />;
//   }
// };
