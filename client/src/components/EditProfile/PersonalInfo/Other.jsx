//External Lib Import
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Col, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Creatable from "react-select/creatable";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";
import { Keywords } from "../../../Fakedata";

const validationSchema = Yup.object().shape({
  Keywords: Yup.array().min(1, "Keywords Require !"),
});

const Other = () => {
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
              Other Relevant Information
            </h4>
          </div>
          <Row>
            <Col>
              <div className="form-group">
                <label
                  htmlFor="CareerSummary"
                  className={
                    props.errors.CareerSummary
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Carrier Summary
                </label>

                <Field name="CareerSummary">
                  {({
                    field,
                    form: { touched, errors, setFieldValue, values },
                    meta,
                  }) => (
                    <ReactQuill
                      onChange={(html) => setFieldValue("CareerSummary", html)}
                      value={values?.CareerSummary}
                      theme="snow"
                      bounds={".app"}
                    />
                  )}
                </Field>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-group">
                <label
                  htmlFor="CareerSummary"
                  className={
                    props.errors.CareerSummary
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Special Qualification
                </label>

                <Field name="SpecialQualification">
                  {({
                    field,
                    form: { touched, errors, setFieldValue, values },
                    meta,
                  }) => (
                    <ReactQuill
                      onChange={(html) =>
                        setFieldValue("SpecialQualification", html)
                      }
                      value={values?.SpecialQualification}
                      theme="snow"
                      bounds={".app"}
                    />
                  )}
                </Field>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-group">
                <label
                  htmlFor="Keywords"
                  className={
                    props.errors.Keywords
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  <i>
                    Keywords <span className="text-danger">*</span>
                  </i>
                </label>
                <Creatable
                  isClearable
                  closeMenuOnSelect={true}
                  isMulti
                  defaultValue={props?.initialValues?.Keywords.map((i) =>
                    Keywords.find((item) => item.value === i),
                  )}
                  options={Keywords}
                  onChange={(e) =>
                    props.setFieldValue(
                      "Keywords",
                      e.map((item) => item.value),
                    )
                  }
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

export default Other;
