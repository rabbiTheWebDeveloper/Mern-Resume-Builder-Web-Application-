//External Lib Import
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";

//Internal Lib Import
import UserRequest from "../../APIRequest/UserRequest";
import ToastMessage from "../../helper/ToastMessage";

const VetifyOtp = () => {
  let [OTP, SetOTP] = useState("");
  const navigate = useNavigate();

  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid lightskyblue",
    boxSizing: "border-box",
    color: "rgb(36, 109, 248)",
    backgroundColor: "white",
    borderColor: "lightgrey",
    outlineColor: "#246df8",
  };

  const SubmitOTP = async () => {
    if (OTP.length === 6) {
      UserRequest.VerifyRecoveryOtp(OTP).then((result) => {
        if (result === true) {
          navigate("/reset-password");
        }
      });
    } else {
      ToastMessage.errorMessage("Enter 6 Digit Code");
    }
  };

  return (
    <div className="padding-top-90 padding-bottom-90 access-page-bg">
      <Container>
        <Row>
          <Col xl={4} md={6}>
            <div className="access-form">
              <div className="form-header">
                <h5>
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
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  Verify Otp Code
                </h5>
              </div>

              <Row>
                <Col md={12}>
                  <ReactCodeInput
                    onChange={(value) => SetOTP(value)}
                    inputStyle={defaultInputStyle}
                    fields={6}
                  />
                </Col>
              </Row>

              <div className="more-option"></div>

              <button
                onClick={SubmitOTP}
                className="button primary-bg btn-block"
              >
                Sent Opt
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VetifyOtp;
