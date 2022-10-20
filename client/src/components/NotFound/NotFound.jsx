//External Lib Import
import React from "react";
import { Link } from "react-router-dom";

//Internal Lib Import
import NotFoundImg from "../../assets/images/error.png";

const NotFound = () => {
  return (
    <div className="padding-top-80 section-padding-bottom alice-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-padding-150 error-page-wrap text-center white-bg">
              <div className="icon">
                <img src={NotFoundImg} className="img-fluid" alt="" />
              </div>
              <h1>404</h1>
              <p>we can't find the page your are looking for</p>
              <Link to="/" className="button">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
