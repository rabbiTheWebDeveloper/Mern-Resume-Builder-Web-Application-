//External Lib Import
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Col, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Select, { createFilter } from "react-select";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";
import {
  CountryList,
  DistrictsLists,
  PreferredJobCategories,
  PreferredOrganization,
  PreferredSpecialJobCategories,
} from "../../../Fakedata";

const validationSchema = Yup.object().shape({
  PreferredAreas: Yup.array()
    .min(1, "Please select preferred Job Categories!")
    .max(4, "You cannot add more than 3 Categories!"),
  PreferredJobLocationInsideBangladesh: Yup.array()
    .min(1, "Please select preferred districts Inside Bangladesh!")
    .max(15, "You cannot add more than 15 districts Inside Bangladesh!"),

  PreferredJobLocationOutsideBangladesh: Yup.array()
    .min(1, "Please select preferred districts Outside Bangladesh!")
    .max(10, "You cannot add more than 10 districts Outside Bangladesh!"),

  PreferredOrganization: Yup.array().max(
    12,
    "You cannot add more than 12 Preferred Organization",
  ),
});

const Preferred = () => {
  const { UserDetails } = useSelector((state) => state.User);
  return (
    <Formik
      enableReinitialize
      initialValues={UserDetails}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);

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
              Preferred Areas
            </h4>
          </div>
          <Row>
            <Col>
              <div className="form-group">
                <label
                  className={
                    props.errors.CarrierObjective
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Preferred Job Categories
                  <span className="text-danger">*</span>
                  <p>You can add maximum 3 Functional category!</p>
                </label>

                <Row>
                  <Col md={6}>
                    <label
                      htmlFor="PreferredAreas"
                      className={
                        props.errors.PreferredAreas
                          ? "col-form-label bg-danger text-white"
                          : "col-form-label"
                      }
                    >
                      Functional (max 3)
                    </label>

                    <div style={{ height: "150px", overflowY: "scroll" }}>
                      {PreferredJobCategories.map((item, index) => (
                        <div className="mt-0 terms" key={index}>
                          <Field
                            className="custom-radio"
                            type="checkbox"
                            id={item.value}
                            name="PreferredAreas"
                            value={item.value}
                          />
                          <label htmlFor={item.value}>
                            <span
                              className="dot"
                              style={{ borderRadius: 0 }}
                            ></span>
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Col>

                  <Col md={6}>
                    <label
                      htmlFor="PreferredAreas"
                      className={
                        props.errors.PreferredAreas
                          ? "col-form-label bg-danger text-white"
                          : "col-form-label"
                      }
                    >
                      Special Skills (max 3)
                    </label>

                    <div style={{ height: "150px", overflowY: "scroll" }}>
                      {PreferredSpecialJobCategories.map((item, index) => (
                        <div className="mt-0 terms" key={index}>
                          <Field
                            className="custom-radio"
                            type="checkbox"
                            id={item.value}
                            name="PreferredAreas"
                            value={item.value}
                          />
                          <label htmlFor={item.value}>
                            <span
                              className="dot"
                              style={{ borderRadius: 0 }}
                            ></span>
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-group">
                <label
                  className={
                    props.errors.CarrierObjective
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Preferred Job Categories
                  <span className="text-danger">*</span>
                  <p>
                    Preferred Job Location defines the geographical place where
                    you prefer to work. Add your priority wise preferred job
                    locations. i.e. 1st: Dhaka, 2nd: Sylhet, 3rd: Khulna.
                  </p>
                </label>
                <Row>
                  <Col md={6}>
                    <label
                      htmlFor="PreferredJobLocationInsideBangladesh"
                      className={
                        props.errors.PreferredJobLocationInsideBangladesh
                          ? "col-form-label bg-danger text-white"
                          : "col-form-label"
                      }
                    >
                      <i>Inside Bangladesh Add Districts (max 15)</i>
                    </label>
                    <Select
                      isSearchable
                      closeMenuOnSelect={true}
                      isMulti
                      defaultValue={props?.initialValues?.PreferredJobLocationInsideBangladesh.map(
                        (i) => DistrictsLists.find((item) => item.value === i),
                      )}
                      options={DistrictsLists}
                      onChange={(e) =>
                        props.setFieldValue(
                          "PreferredJobLocationInsideBangladesh",
                          e.map((item) => item.value),
                        )
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <label
                      htmlFor="PreferredJobLocationOutsideBangladesh"
                      className={
                        props.errors.PreferredJobLocationOutsideBangladesh
                          ? "col-form-label bg-danger text-white"
                          : "col-form-label"
                      }
                    >
                      <i>Inside Bangladesh Add Districts (max 10)</i>
                    </label>
                    <Select
                      isSearchable
                      closeMenuOnSelect={true}
                      isMulti
                      defaultValue={props?.initialValues?.PreferredJobLocationOutsideBangladesh.map(
                        (i) => CountryList.find((item) => item.value === i),
                      )}
                      options={CountryList}
                      onChange={(e) =>
                        props.setFieldValue(
                          "PreferredJobLocationOutsideBangladesh",
                          e.map((item) => item.value),
                        )
                      }
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-group">
                <label
                  htmlFor="PreferredOrganization"
                  className={
                    props.errors.PreferredOrganization
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  <i>Add your preferred organization type (max 12)</i>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  isMulti
                  defaultValue={props?.initialValues?.PreferredOrganization.map(
                    (i) => PreferredOrganization.find((item) => item.value === i),
                  )}
                  options={PreferredOrganization}
                  onChange={(e) =>
                    props.setFieldValue(
                      "PreferredOrganization",
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

export default Preferred;
