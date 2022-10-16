//External Lib Import
import { Field, Form, Formik } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

//Internal Lib Import
import UserRequest from "../../APIRequest/UserRequest";

const validationSchema = Yup.object().shape({
  Email: Yup.string()
    .required("Email is Required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid Email address",
    ),
});

const SentOtp = () => {
  const navigate = useNavigate();

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
                  Forget Password
                </h5>
              </div>

              <Formik
                initialValues={{
                  Email: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  UserRequest.SendRecoveryOtp(values.Email).then((result) => {
                    if (result) {
                      navigate("/verify-otp");
                    }
                  });
                }}
              >
                {(props) => (
                  <Form>
                    <Row>
                      <Col md={12}>
                        <Field>
                          {({
                            field,
                            form: { touched, errors, values, setFieldValue },
                            meta,
                          }) => (
                            <div className="form-group">
                              <Field
                                name="Email"
                                type="email"
                                placeholder="Email Address"
                                className={
                                  errors.Email && touched.Email
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                              />
                            </div>
                          )}
                        </Field>
                      </Col>
                    </Row>

                    <button
                      type="submit"
                      className="button primary-bg btn-block"
                    >
                      Sent Opt
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SentOtp;
