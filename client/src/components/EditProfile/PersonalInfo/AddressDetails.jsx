//External Lib Import
import { useState } from "react";
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Col, Row } from "react-bootstrap";
import Select, { createFilter } from "react-select";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";
import {
  CountryList,
  DistrictsLists,
  Unions,
  Upazilas,
} from "../../../Fakedata";

const validationSchema = Yup.object().shape({
  PresentAddress: Yup.object().shape({
    District: Yup.string().required("District is Required"),
    Upazila: Yup.string().required("Upazila is Required"),
    Union: Yup.string().required("Union is Required"),
    Road: Yup.string().required("Road is Required"),
  }),
  PermanentAddress: Yup.object().shape({
    District: Yup.string().required("District is Required"),
    Upazila: Yup.string().required("Upazila is Required"),
    Union: Yup.string().required("Union is Required"),
    Road: Yup.string().required("Road is Required"),
  }),
});

const AddressDetails = () => {
  const [insidePresentBangladesh, setinsidePresentBangladesh] = useState(true);
  const [insidePermanentBangladesh, setinsidePermanentBangladesh] =
    useState(true);

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
              Address Details
            </h4>
          </div>
          <Row>
            <Col>
              <div className="form-group">
                <label
                  className={
                    props.errors.LastName
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                  htmlFor="LastName"
                >
                  Present Address <span className="text-danger">*</span>
                </label>

                <div className="d-flex mb-3">
                  <div className="mr-3 terms">
                    <input
                      className="custom-radio"
                      id="insidePresentBangladesh"
                      type="radio"
                      defaultValue
                      name="PresentAddressCountry"
                      onClick={() => setinsidePresentBangladesh(true)}
                      defaultChecked={insidePresentBangladesh}
                    />
                    <label
                      htmlFor="insidePresentBangladesh"
                      onClick={() => setinsidePresentBangladesh(true)}
                    >
                      <span className="dot" />
                      Inside Bangladesh
                    </label>
                  </div>
                  <div className="terms">
                    <input
                      className="custom-radio"
                      id="outsidePresentBangladesh"
                      type="radio"
                      defaultValue
                      name="PresentAddressCountry"
                      onClick={() => setinsidePresentBangladesh(false)}
                    />
                    <label
                      htmlFor="outsidePresentBangladesh"
                      onClick={() => setinsidePresentBangladesh(false)}
                    >
                      <span className="dot" /> Outside Bangladesh
                    </label>
                  </div>
                </div>
              </div>

              <Row>
                {insidePresentBangladesh ? (
                  <>
                    <Col md={4}>
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PresentAddressDistrict"
                        >
                          Select District <span className="text-danger">*</span>
                        </label>
                        <Select
                          isSearchable
                          closeMenuOnSelect={true}
                          defaultValue={[
                            DistrictsLists[
                              DistrictsLists.findIndex(
                                (item) =>
                                  item.value ===
                                  props?.initialValues?.PresentAddress
                                    ?.District,
                              )
                            ],
                          ]}
                          options={DistrictsLists}
                          onChange={(e) =>
                            props.setFieldValue(
                              "PresentAddress.District",
                              e.value,
                            )
                          }
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PresentAddressUpazila"
                        >
                          Select Upazila <span className="text-danger">*</span>
                        </label>
                        <Select
                          isSearchable
                          closeMenuOnSelect={true}
                          defaultValue={[
                            Upazilas[
                              Upazilas.findIndex(
                                (item) =>
                                  item.value ===
                                  props?.initialValues?.PresentAddress?.Upazila,
                              )
                            ],
                          ]}
                          options={Upazilas}
                          onChange={(e) =>
                            props.setFieldValue(
                              "PresentAddress.Upazila",
                              e.value,
                            )
                          }
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PermanentAddressUnion"
                        >
                          Select Union <span className="text-danger">*</span>
                        </label>
                        <Select
                          isSearchable
                          isLoading
                          filterOption={createFilter({ ignoreAccents: false })}
                          closeMenuOnSelect={true}
                          defaultValue={[
                            Unions[
                              Unions.findIndex(
                                (item) =>
                                  item.value ===
                                  props?.initialValues?.PresentAddress?.Union,
                              )
                            ],
                          ]}
                          options={Unions}
                          onChange={(e) =>
                            props.setFieldValue("PresentAddress.Union", e.value)
                          }
                        />
                      </div>
                    </Col>
                  </>
                ) : (
                  <Col sm={12}>
                    <div className="form-group">
                      <label
                        className={
                          props.errors.LastName
                            ? "col-form-label bg-danger text-white"
                            : "col-form-label"
                        }
                        htmlFor="PresentAddressCountry"
                      >
                        Select Country <span className="text-danger">*</span>
                      </label>
                      <Select
                        isSearchable
                        closeMenuOnSelect={true}
                        defaultValue={[
                          CountryList[
                            CountryList.findIndex(
                              (item) =>
                                item.value ===
                                props?.initialValues?.PresentAddress?.Country,
                            )
                          ],
                        ]}
                        options={CountryList}
                        onChange={(e) =>
                          props.setFieldValue("PresentAddress.Country", e.value)
                        }
                      />
                    </div>
                  </Col>
                )}
                <Col>
                  <Field>
                    {({
                      field,
                      form: { touched, errors, values, setFieldValue },
                      meta,
                    }) => (
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PresentAddressRoad"
                        >
                          Select Road <span className="text-danger">*</span>
                        </label>
                        <Field
                          id="PresentAddressRoad"
                          name="PresentAddress.Road"
                          placeholder="Present Address Road"
                          className={
                            errors.PresentAddress?.Road &&
                            touched.PresentAddress?.Road
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                      </div>
                    )}
                  </Field>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-group">
                <label
                  className={
                    props.errors.LastName
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                  htmlFor="LastName"
                >
                  Permanent Address <span className="text-danger">*</span>
                </label>

                <div className="d-flex mb-3">
                  <div className="mr-3 terms">
                    <input
                      className="custom-radio"
                      id="insidePermanentBangladesh"
                      type="radio"
                      defaultValue
                      name="PermanentAddressCountry"
                      onClick={() => setinsidePermanentBangladesh(true)}
                      defaultChecked={insidePermanentBangladesh}
                    />
                    <label
                      htmlFor="insidePermanentBangladesh"
                      onClick={() => setinsidePermanentBangladesh(true)}
                    >
                      <span className="dot" />
                      Inside Bangladesh
                    </label>
                  </div>
                  <div className="terms">
                    <input
                      className="custom-radio"
                      id="outsidePermanentBangladesh"
                      type="radio"
                      defaultValue
                      name="PermanentAddressCountry"
                      onClick={() => setinsidePermanentBangladesh(false)}
                    />
                    <label
                      htmlFor="outsidePermanentBangladesh"
                      onClick={() => setinsidePermanentBangladesh(false)}
                    >
                      <span className="dot" /> Outside Bangladesh
                    </label>
                  </div>
                </div>
              </div>

              <Row>
                {insidePermanentBangladesh ? (
                  <>
                    <Col md={4}>
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PermanentAddressDistrict"
                        >
                          Select District <span className="text-danger">*</span>
                        </label>
                        <Select
                          isSearchable
                          closeMenuOnSelect={true}
                          defaultValue={[
                            DistrictsLists[
                              DistrictsLists.findIndex(
                                (item) =>
                                  item.value ===
                                  props?.initialValues?.PermanentAddress
                                    ?.District,
                              )
                            ],
                          ]}
                          options={DistrictsLists}
                          onChange={(e) =>
                            props.setFieldValue(
                              "PermanentAddress.District",
                              e.value,
                            )
                          }
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PermanentAddressUpazila"
                        >
                          Select Upazila <span className="text-danger">*</span>
                        </label>
                        <Select
                          isSearchable
                          closeMenuOnSelect={true}
                          defaultValue={[
                            Upazilas[
                              Upazilas.findIndex(
                                (item) =>
                                  item.value ===
                                  props?.initialValues?.PermanentAddress
                                    ?.Upazila,
                              )
                            ],
                          ]}
                          options={Upazilas}
                          onChange={(e) =>
                            props.setFieldValue(
                              "PermanentAddress.Upazila",
                              e.value,
                            )
                          }
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PermanentAddressUnion"
                        >
                          Select Union <span className="text-danger">*</span>
                        </label>
                        <Select
                          isSearchable
                          isLoading
                          filterOption={createFilter({ ignoreAccents: false })}
                          closeMenuOnSelect={true}
                          defaultValue={[
                            Unions[
                              Unions.findIndex(
                                (item) =>
                                  item.value ===
                                  props?.initialValues?.PermanentAddress?.Union,
                              )
                            ],
                          ]}
                          options={Unions}
                          onChange={(e) =>
                            props.setFieldValue(
                              "PermanentAddress.Union",
                              e.value,
                            )
                          }
                        />
                      </div>
                    </Col>
                  </>
                ) : (
                  <Col sm={12}>
                    <div className="form-group">
                      <label
                        className={
                          props.errors.LastName
                            ? "col-form-label bg-danger text-white"
                            : "col-form-label"
                        }
                        htmlFor="PermanentAddressCountry"
                      >
                        Select Country <span className="text-danger">*</span>
                      </label>
                      <Select
                        isSearchable
                        closeMenuOnSelect={true}
                        defaultValue={[
                          CountryList[
                            CountryList.findIndex(
                              (item) =>
                                item.value ===
                                props?.initialValues?.PermanentAddress?.Country,
                            )
                          ],
                        ]}
                        options={CountryList}
                        onChange={(e) =>
                          props.setFieldValue(
                            "PermanentAddress.Country",
                            e.value,
                          )
                        }
                      />
                    </div>
                  </Col>
                )}
                <Col>
                  <Field>
                    {({
                      field,
                      form: { touched, errors, values, setFieldValue },
                      meta,
                    }) => (
                      <div className="form-group">
                        <label
                          className={
                            props.errors.LastName
                              ? "col-form-label bg-danger text-white"
                              : "col-form-label"
                          }
                          htmlFor="PermanentAddressRoad"
                        >
                          Select Road <span className="text-danger">*</span>
                        </label>
                        <Field
                          id="PermanentAddressRoad"
                          name="PermanentAddress.Road"
                          placeholder="Permanent Address Road"
                          className={
                            errors.PermanentAddress?.Road &&
                            touched.PermanentAddress?.Road
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                      </div>
                    )}
                  </Field>
                </Col>
              </Row>
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

export default AddressDetails;
