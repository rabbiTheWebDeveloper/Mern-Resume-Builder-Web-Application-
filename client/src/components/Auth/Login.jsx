//External Lib Import
import { Field, Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";

//Internal Lib Import
import AuthRequest from "../../APIRequest/AuthRequest";

const validationSchema = Yup.object().shape({
  Email: Yup.string()
    .required("Email is Required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid Email address",
    ),
  Password: Yup.string().required("Password is Required"),
});

const Login = () => {
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
                  Login
                </h5>
              </div>

              <Formik
                initialValues={{
                  Email: "",
                  Password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  AuthRequest.LoginUser(values);
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
                                placeholder="Password"
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
                    </Row>

                    <div className="more-option">
                      <div className="mt-0 terms">
                        <input
                          className="custom-radio"
                          type="checkbox"
                          id="radio-4"
                          name="termsandcondition"
                        />
                        <label htmlFor="radio-4">
                          <span className="dot" /> Remember Me
                        </label>
                      </div>
                      <Link to="/forget-password">Forget Password?</Link>
                    </div>

                    <button
                      type="submit"
                      className="button primary-bg btn-block"
                    >
                      Login
                    </button>
                  </Form>
                )}
              </Formik>

              <div className="shortcut-login">
                <span>
                  Don't have an account? <Link to="/register">Register</Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
