//External Lib Import
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";
import { ReferencesRelation } from "../../../Fakedata";

const validationSchema = Yup.object().shape({
  References: Yup.array().of(
    Yup.object().shape({
      Name: Yup.string().required("Name is Required"),
      Designation: Yup.string().required("Designation is Required"),
      Organization: Yup.string().required("Organization is Required"),
    }),
  ),
});

const References = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { UserDetails } = useSelector((state) => state.User);

  const ModalForm = () => {
    return (
      <>
        <div className={show ? "fade modal-backdrop show" : ""}></div>
        <div
          className={
            show
              ? "modal fade modal-education d-block show"
              : "modal fade modal-education"
          }
          id="modal-education"
          style={{ paddingRight: 17 }}
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ transform: "none" }}
          >
            <div className="modal-content">
              <div className="modal-body">
                <Formik
                  enableReinitialize
                  initialValues={UserDetails}
                  validationSchema={validationSchema}
                  onSubmit={(values, actions) => {
                    UserRequest.UserUpdate(values).then((result) => {
                      if (result) {
                        UserRequest.UserDetails().then((result) => {
                          if (result) {
                            setShow(false);
                          }
                        });
                      }
                    });
                  }}
                >
                  {(props) => (
                    <Form>
                      <FieldArray
                        name="References"
                        render={(arrayHelpers) => (
                          <div>
                            <div className="title">
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
                                  className="feather feather-book"
                                >
                                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                                Reference Proficiency Summary
                              </h4>
                              <button
                                type="button"
                                className="add-more"
                                onClick={() =>
                                  arrayHelpers.push({
                                    Name: "",
                                    Designation: "",
                                    Organization: "",
                                    Email: "",
                                    Relation: "",
                                    Mobile: "",
                                    PhoneOff: "",
                                    Address: "",
                                  })
                                }
                              >
                                + Add Reference
                              </button>
                            </div>
                            <div
                              className="content"
                              style={{ height: "500px", overflowX: "scroll" }}
                            >
                              {props?.values?.References &&
                                props?.values?.References.length > 0 &&
                                props?.values?.References.map(
                                  (friend, index) => (
                                    <div key={index}>
                                      <div className="input-block-wrap">
                                        <div className="form-group row">
                                          <label className="col-sm-1 col-form-label">
                                            {index + 1}
                                          </label>
                                          <div className="col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors?.References?.[
                                                      index
                                                    ]?.Name
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Reference Name &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`References.${index}.Name`}
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors?.References?.[
                                                      index
                                                    ]?.Designation
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Designation &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`References.${index}.Designation`}
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors?.References?.[
                                                      index
                                                    ]?.Organization
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Organization &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`References.${index}.Organization`}
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Email &nbsp;
                                                </div>
                                              </div>
                                              <Field
                                                name={`References.${index}.Email`}
                                                className="form-control"
                                                type="email"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Mobile &nbsp;
                                                </div>
                                              </div>
                                              <PhoneInput
                                                country={"bd"}
                                                className="input-group-text"
                                                onChange={(phone) =>
                                                  props.setFieldValue(
                                                    `References.${index}.Mobile`,
                                                    phone,
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Phone Off &nbsp;
                                                </div>
                                              </div>
                                              <PhoneInput
                                                className="form-control"
                                                country={"bd"}
                                                value={
                                                  props?.initialValues
                                                    ?.References?.PhoneOff
                                                }
                                                onChange={(phone) =>
                                                  props.setFieldValue(
                                                    `References.${index}.PhoneOff`,
                                                    phone,
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Relation &nbsp;
                                                </div>
                                              </div>

                                              <Select
                                                className="form-control"
                                                isSearchable
                                                closeMenuOnSelect={true}
                                                defaultValue={[
                                                  ReferencesRelation[
                                                    ReferencesRelation.findIndex(
                                                      (item) =>
                                                        item.value ===
                                                        props?.initialValues
                                                          ?.Relation,
                                                    )
                                                  ],
                                                ]}
                                                options={ReferencesRelation}
                                                onChange={(e) =>
                                                  props.setFieldValue(
                                                    `References.${index}.Relation`,
                                                    e.value,
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Address &nbsp;
                                                </div>
                                              </div>
                                              <Field
                                                name={`References.${index}.Address`}
                                                className="form-control"
                                                as="textarea"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row mb-5">
                                        <div className="offset-sm-1 col-sm-11">
                                          <Button
                                            type="button"
                                            variant="danger"
                                            onClick={() =>
                                              arrayHelpers.remove(index)
                                            }
                                          >
                                            Delete Reference
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  ),
                                )}
                            </div>
                            <div className="row">
                              <div className="col-sm-9">
                                <div className="buttons">
                                  <Button className="primary-bg" type="submit">
                                    Save Update
                                  </Button>
                                  <Button type="button" onClick={handleClose}>
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      />
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="edication-background details-section dashboard-section mt-5">
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
          className="feather feather-feather"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1={16} y1={8} x2={2} y2={22} />
          <line x1={17} y1={15} x2={9} y2={15} />
        </svg>
        Reference Summary
      </h4>

      {UserDetails?.References?.map((lan, index) => (
        <div className="education-label" key={index}>
          <h5>
            <b>Reference Name:</b> {lan.Name}
          </h5>
          <h5>
            <b>Reference Designation:</b> {lan.Designation}
          </h5>
          <h5>
            <b>Reference Organization:</b> {lan.Organization}
          </h5>
          <h5>
            <b>Reference Email:</b> {lan.Email}
          </h5>
        </div>
      ))}

      <Button
        type="Button "
        className="btn btn-primary edit-resume"
        onClick={handleShow}
      >
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
          className="feather feather-edit-2"
        >
          <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
        </svg>
      </Button>

      {/* Modal */}
      <ModalForm />
    </div>
  );
};

export default References;
