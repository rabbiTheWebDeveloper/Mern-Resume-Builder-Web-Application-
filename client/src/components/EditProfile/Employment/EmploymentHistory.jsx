//External Lib Import
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";

const validationSchema = Yup.object().shape({
  EmploymentHistorys: Yup.array().of(
    Yup.object().shape({
      CompanyName: Yup.string().required("CompanyName is Required"),
      CompanyBusiness: Yup.string().required("CompanyBusiness is Required"),
      Designation: Yup.string().required("Designation is Required"),
      StartDate: Yup.string().required("Start Date is Required"),
      CompanyLocation: Yup.string().required("Company Location is Required"),
      JobType: Yup.string().required("JobType is Required"),
    }),
  ),
});

const EmploymentHistory = () => {
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
                        name="EmploymentHistorys"
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
                                Employment History
                              </h4>
                              <button
                                type="button"
                                className="add-more"
                                onClick={() =>
                                  arrayHelpers.push({
                                    CompanyName: "",
                                    CompanyBusiness: "",
                                    Designation: "",
                                    Department: {
                                      name: "",
                                      exp: "",
                                    },
                                    StartDate: "",
                                    EndDate: "",
                                    Responsibilities: "",
                                    CompanyLocation: "",
                                    JobType: "",
                                  })
                                }
                              >
                                + Add Experience
                              </button>
                            </div>
                            <div
                              className="content"
                              style={{ height: "500px", overflowX: "scroll" }}
                            >
                              {props?.values?.EmploymentHistorys &&
                                props?.values?.EmploymentHistorys.length > 0 &&
                                props?.values?.EmploymentHistorys.map(
                                  (employment, index) => (
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
                                                    props?.errors
                                                      ?.EmploymentHistorys?.[
                                                      index
                                                    ]?.CompanyName
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Company Name &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`EmploymentHistorys.${index}.CompanyName`}
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
                                                    props?.errors
                                                      ?.EmploymentHistorys?.[
                                                      index
                                                    ]?.CompanyBusiness
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Company Business &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`EmploymentHistorys.${index}.CompanyBusiness`}
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="col-sm-11 offset-sm-1">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors
                                                      ?.EmploymentHistorys?.[
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
                                                name={`EmploymentHistorys.${index}.Designation`}
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="col-sm-11 offset-sm-1">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors
                                                      ?.EmploymentHistorys?.[
                                                      index
                                                    ]?.StartDate
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Start Date &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`EmploymentHistorys.${index}.StartDate`}
                                                className="form-control"
                                                type="date"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="col-sm-11 offset-sm-1">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors
                                                      ?.EmploymentHistorys?.[
                                                      index
                                                    ]?.EndDate
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  End Date &nbsp;
                                                </div>
                                              </div>
                                              <Field
                                                name={`EmploymentHistorys.${index}.EndDate`}
                                                className="form-control"
                                                type="date"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="col-sm-11 offset-sm-1">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors
                                                      ?.EmploymentHistorys?.[
                                                      index
                                                    ]?.CompanyLocation
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Company Location &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`EmploymentHistorys.${index}.CompanyLocation`}
                                                className="form-control"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="col-sm-11 offset-sm-1">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className={
                                                    props?.errors
                                                      ?.EmploymentHistorys?.[
                                                      index
                                                    ]?.JobType
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Job Type &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>

                                              <div className="d-flex mb-3">
                                                <div className="mx-3 terms">
                                                  <Field
                                                    className="custom-radio"
                                                    id={`EmploymentHistorys.${index}.InRemote`}
                                                    type="radio"
                                                    name={`EmploymentHistorys.${index}.JobType`}
                                                    value="In Remote"
                                                  />
                                                  <label
                                                    htmlFor={`EmploymentHistorys.${index}.InRemote`}
                                                  >
                                                    <span className="dot" />
                                                    In Remote
                                                  </label>
                                                </div>
                                                <div className="terms">
                                                  <Field
                                                    className="custom-radio"
                                                    id={`EmploymentHistorys.${index}.InOffice`}
                                                    type="radio"
                                                    name={`EmploymentHistorys.${index}.JobType`}
                                                    value="In Office"
                                                  />
                                                  <label
                                                    htmlFor={`EmploymentHistorys.${index}.InOffice`}
                                                  >
                                                    <span className="dot" /> In
                                                    Office
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Department Name
                                                </div>
                                              </div>
                                              <Field
                                                name={`EmploymentHistorys.${index}.Department.name`}
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
                                                  Department Experience
                                                </div>
                                              </div>
                                              <Field
                                                name={`EmploymentHistorys.${index}.Department.exp`}
                                                className="form-control"
                                                type="number"
                                                min="1"
                                              />
                                            </div>
                                          </div>
                                        </div>

                                        <div className="form-group row">
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Responsibilities
                                                </div>
                                              </div>

                                              <Field
                                                name={`EmploymentHistorys.${index}.Responsibilities`}
                                              >
                                                {({
                                                  field,
                                                  form: {
                                                    touched,
                                                    errors,
                                                    setFieldValue,
                                                    values,
                                                  },
                                                  meta,
                                                }) => (
                                                  <ReactQuill
                                                    onChange={(html) =>
                                                      setFieldValue(
                                                        `EmploymentHistorys.${index}.Responsibilities`,
                                                        html,
                                                      )
                                                    }
                                                    value={
                                                      values
                                                        ?.EmploymentHistorys?.[
                                                        index
                                                      ]?.Responsibilities
                                                    }
                                                    theme="snow"
                                                    bounds={".app"}
                                                  />
                                                )}
                                              </Field>
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
                                            Delete Experience
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
          className="feather feather-briefcase"
        >
          <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
        Employment History
      </h4>

      {UserDetails?.EmploymentHistorys?.map((employment, index) => (
        <div className="education-label" key={index}>
          <span className="study-year">
            {employment.StartDate} - {employment.EndDate || "Continue"}
          </span>
          <h5>
            {employment.Designation}
            <span>@ {employment.CompanyName}</span>
          </h5>
          <p> {parse(employment.Responsibilities)}</p>
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

export default EmploymentHistory;
