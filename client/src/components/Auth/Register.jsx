//External Lib Import
import { Field, Form, Formik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//Internal Lib Import
import { PreferredJobCategories } from "../../Fakedata";
import AuthRequest from "../../APIRequest/AuthRequest";
import ReactSelect from "react-select";

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is Required"),
  LastName: Yup.string().required("Last Name is Required"),
  Gender: Yup.string().required("Gender is Required"),
  Email: Yup.string()
    .required("Email is Required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid Email address",
    ),
  Phone: Yup.string().required("Phone is Required"),
  Password: Yup.string().required("Password is Required"),
  ConfirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf(
      [Yup.ref("Password"), null],
      "Passwords and Confirm Password must match",
    ),
});

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="padding-top-90 padding-bottom-90 access-page-bg register">
      <Container>
        <Row>
          <Col md={6} xl={6}>
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
                    className="feather feather-edit"
                  >
                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                  </svg>
                  Register Account
                </h5>
              </div>

              <Formik
                initialValues={{
                  FirstName: "",
                  LastName: "",
                  Gender: "",
                  PreferredAreas: "",
                  Phone: "",
                  Email: "",
                  Password: "",
                  ConfirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  AuthRequest.RegisterUser(values).then((result) => {
                    if (result) {
                      navigate("/login");
                    }
                  });
                }}
              >
                {(props) => (
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Field>
                          {({
                            field,
                            form: { touched, errors, values, setFieldValue },
                            meta,
                          }) => (
                            <div className="form-group">
                              <Field
                                name="FirstName"
                                type="text"
                                placeholder="First Name"
                                className={
                                  errors.FirstName && touched.FirstName
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                              />
                            </div>
                          )}
                        </Field>
                      </Col>
                      <Col md={6}>
                        <Field>
                          {({
                            field,
                            form: { touched, errors, values, setFieldValue },
                            meta,
                          }) => (
                            <div className="form-group">
                              <Field
                                name="LastName"
                                type="text"
                                placeholder="Last Name"
                                className={
                                  errors.LastName && touched.LastName
                                    ? "form-control is-invalid"
                                    : "form-control"
                                }
                              />
                            </div>
                          )}
                        </Field>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
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
                      <Col md={6}>
                        <Field>
                          {({
                            field,
                            form: { touched, errors, values, setFieldValue },
                            meta,
                          }) => (
                            <div className="form-group">
                              <PhoneInput
                                country={"bd"}
                                value={values.Phone}
                                onChange={(phone) =>
                                  setFieldValue("Phone", phone)
                                }
                                className={
                                  errors.Phone &&
                                  touched.Phone &&
                                  "form-control is-invalid"
                                }
                              />
                            </div>
                          )}
                        </Field>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
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
                      <Col md={6}>
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
                                placeholder="Confirm Password"
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

                    <Row>
                      <Col>
                        <Field>
                          {({
                            field,
                            form: { touched, errors, values, setFieldValue },
                            meta,
                          }) => (
                            <div className="form-group">
                              <ReactSelect
                                className="form-control"
                                isSearchable
                                closeMenuOnSelect={true}
                                defaultValue={[
                                  {
                                    value: "EducationTraining",
                                    label: "Education/Training",
                                  },
                                ]}
                                options={PreferredJobCategories}
                                onChange={(e) =>
                                  props.setFieldValue("PreferredAreas", e.value)
                                }
                              />
                            </div>
                          )}
                        </Field>
                      </Col>
                    </Row>

                    <div className="account-type">
                      <Field>
                        {({
                          field,
                          form: { touched, errors, values, setFieldValue },
                          meta,
                        }) => (
                          <label htmlFor="Male">
                            <Field
                              id="Male"
                              type="radio"
                              name="Gender"
                              value="Male"
                            />
                            <span
                              className={
                                errors.Gender && touched.Gender
                                  ? "border-danger"
                                  : ""
                              }
                            >
                              Male
                            </span>
                          </label>
                        )}
                      </Field>

                      <Field>
                        {({
                          field,
                          form: { touched, errors, values, setFieldValue },
                          meta,
                        }) => (
                          <label htmlFor="Female">
                            <Field
                              id="Female"
                              type="radio"
                              name="Gender"
                              value="Female"
                            />
                            <span
                              className={
                                errors.Gender && touched.Gender
                                  ? "border-danger"
                                  : ""
                              }
                            >
                              Female
                            </span>
                          </label>
                        )}
                      </Field>
                      <Field>
                        {({
                          field,
                          form: { touched, errors, values, setFieldValue },
                          meta,
                        }) => (
                          <label htmlFor="Other">
                            <Field
                              id="Other"
                              type="radio"
                              name="Gender"
                              value="Other"
                            />
                            <span
                              className={
                                errors.Gender && touched.Gender
                                  ? "border-danger"
                                  : ""
                              }
                            >
                              Other
                            </span>
                          </label>
                        )}
                      </Field>
                    </div>
                    <div className="more-option terms">
                      <div className="mt-0 terms">
                        <input
                          className="custom-radio"
                          type="checkbox"
                          id="radio-4"
                          name="termsandcondition"
                          defaultChecked=""
                        />
                        <label htmlFor="radio-4">
                          <span className="dot" /> I accept the
                          <a href="#">terms &amp; conditions</a>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="button primary-bg btn-block"
                    >
                      Register
                    </button>
                  </Form>
                )}
              </Formik>

              <div className="shortcut-login">
                <span>
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
