//External Lib Import
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Col, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";

const validationSchema = Yup.object().shape({
  CarrierObjective: Yup.string().required("Carrier Objective is Required"),
});

const Career = () => {
  const { UserDetails } = useSelector((state) => state.User);

  return (
    <Formik
      enableReinitialize
      initialValues={UserDetails}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        UserRequest.UserUpdate(values).then((result) => {
          if (result) {
            UserRequest.UserDetails();
          }
        });
      }}
    >
      {(props) => (
        <Form className="dashboard-form mt-5">
          <div className="dashboard-section basic-info-input">
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
                className="feather feather-user-check"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy={7} r={4} />
                <polyline points="17 11 19 13 23 9" />
              </svg>
              Careerand Application Information
            </h4>
          </div>
          <Row>
            <Col>
              <div className="form-group">
                <label
                  htmlFor="CarrierObjective"
                  className={
                    props.errors.CarrierObjective
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Carrier Objective <span className="text-danger">*</span>
                </label>

                <Field name="CarrierObjective">
                  {({
                    field,
                    form: { touched, errors, setFieldValue, values },
                    meta,
                  }) => (
                    <ReactQuill
                      onChange={(html) =>
                        setFieldValue("CarrierObjective", html)
                      }
                      value={values?.CarrierObjective}
                      theme="snow"
                      bounds={".app"}
                      className={
                        errors.CarrierObjective && touched.CarrierObjective
                          ? "bg-dange"
                          : "bg-dange"
                      }
                    />
                  )}
                </Field>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="PresentSalary">
                  Present Salary <small>TK/ Month</small>
                </label>
                <Field
                  type="number"
                  id="PresentSalary"
                  name="PresentSalary"
                  className="form-control"
                  min="1"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="ExpectedSalary">
                  Expected Salary <small>TK/ Month</small>
                </label>
                <Field
                  type="number"
                  id="ExpectedSalary"
                  name="ExpectedSalary"
                  className="form-control"
                  min="1"
                />
              </div>
            </Col>
          </Row>

          <button type="submit" className="button">
            Save Change
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Career;
