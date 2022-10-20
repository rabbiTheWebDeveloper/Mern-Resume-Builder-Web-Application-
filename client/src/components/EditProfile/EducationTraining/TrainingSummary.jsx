//External Lib Import
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";
import Select from "react-select";
import { CountryList } from "../../../Fakedata";

const validationSchema = Yup.object().shape({
  Trainings: Yup.array().of(
    Yup.object().shape({
      Title: Yup.string().required("Title is Required"),
      Country: Yup.string().required("Country is Required"),
      Year: Yup.string().required("Year is Required"),
      Institute: Yup.string().required("Institute is Required"),
      Duration: Yup.string().required("Duration is Required"),
      Location: Yup.string().required("Location is Required"),
    }),
  ),
});

const TrainingSummary = () => {
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
                        name="Trainings"
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
                                Training
                              </h4>
                              <button
                                type="button"
                                className="add-more"
                                onClick={() =>
                                  arrayHelpers.push({
                                    Title: "",
                                    Country: "",
                                    Covered: "",
                                    Year: "",
                                    Institute: "",
                                    Duration: "",
                                    Location: "",
                                  })
                                }
                              >
                                + Add Training
                              </button>
                            </div>
                            <div
                              className="content"
                              style={{ height: "500px", overflowX: "scroll" }}
                            >
                              {props?.values?.Trainings &&
                                props?.values?.Trainings.length > 0 &&
                                props?.values?.Trainings.map(
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
                                                    props?.errors?.Trainings?.[
                                                      index
                                                    ]?.Title
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Training Title &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.Title`}
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
                                                    props?.errors?.Trainings?.[
                                                      index
                                                    ]?.Year
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Training Year &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.Year`}
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
                                                    props?.errors?.Trainings?.[
                                                      index
                                                    ]?.Institute
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Institute Name &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.Institute`}
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
                                                    props?.errors?.Trainings?.[
                                                      index
                                                    ]?.Country
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Country &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Select
                                                className="form-control"
                                                isSearchable
                                                closeMenuOnSelect={true}
                                                defaultValue={[
                                                  CountryList[
                                                    CountryList.findIndex(
                                                      (item) =>
                                                        item.value ===
                                                        props?.initialValues
                                                          ?.Trainings?.[index]
                                                          ?.Country,
                                                    )
                                                  ],
                                                ]}
                                                options={CountryList}
                                                onChange={(e) =>
                                                  props.setFieldValue(
                                                    `Trainings.${index}.Country`,
                                                    e.value,
                                                  )
                                                }
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
                                                    props?.errors?.Trainings?.[
                                                      index
                                                    ]?.Duration
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Duration &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.Duration`}
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
                                                    props?.errors?.Trainings?.[
                                                      index
                                                    ]?.Location
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Location &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.Location`}
                                                className="form-control"
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
                                                  Covered
                                                </div>
                                              </div>
                                              <Field
                                                as="textarea"
                                                name={`Trainings.${index}.Covered`}
                                                className="form-control"
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
                                            Delete Training
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
        Training Summary
      </h4>

      {UserDetails?.Trainings?.map((trainging, index) => (
        <div className="education-label" key={index}>
          <span className="study-year">{trainging.Duration}</span>
          <h5>
            {trainging.Title}
            <span>@ {trainging.Institute}</span>
          </h5>
          <p>{trainging.Covered}</p>
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

export default TrainingSummary;
