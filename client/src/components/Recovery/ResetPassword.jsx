//External Lib Import
import { Field, Form, Formik } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

//Internal Lib Import
import UserRequest from "../../APIRequest/UserRequest";

const validationSchema = Yup.object().shape({
  Password: Yup.string().required("Password is Required"),
  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf(
      [Yup.ref("Password"), null],
      "Passwords and Confirm Password must match",
    ),
});

const ResetPassword = () => {
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
                  Reset Password
                </h5>
              </div>

              <Formik
                initialValues={{
                  Password: "",
                  ConfirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  console.log(values);
                  UserRequest.RecoveryResetPass(values).then((result) => {
                    if (result) {
                      navigate("/login");
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
                                name="Password"
                                type="password"
                                placeholder="New Password"
                                className={
                                  errors.Password && touched.Password
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                              />
                            </div>
                          )}
                        </Field>
                      </Col>
                      <Col md={12}>
                        <Field>
                          {({
                            field,
                            form: { touched, errors, values, setFieldValue },
                            meta,
                          }) => (
                            <div className="form-group">
                              <Field
                                name="ConfirmPassword"
                                type="password"
                                placeholder="Confirm New Password"
                                className={
                                  errors.ConfirmPassword &&
                                  touched.ConfirmPassword
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
                      Reset Password
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

export default ResetPassword;
