//External Lib Import
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";

const validationSchema = Yup.object().shape({
  Trainings: Yup.array().of(
    Yup.object().shape({
      LevelOfTraining: Yup.string().required("Level Of Training is Required"),
      ExamDegreeTitle: Yup.string().required("ExamDegree Title is Required"),
      ConcentrationMajorGroup: Yup.string().required(
        "Concentration Major Group is Required",
      ),
      Board: Yup.string().required("Board is Required"),
      InstituteName: Yup.string().required("Institute Name is Required"),
      Result: Yup.string().required("Result is Required"),
      YearOfPassing: Yup.string().required("Year Of Passing is Required"),
      Duration: Yup.string().required("Duration is Required"),
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
                                    LevelOfTraining: "",
                                    ExamDegreeTitle: "",
                                    ConcentrationMajorGroup: "",
                                    Board: "",
                                    InstituteName: "",
                                    Result: "",
                                    YearOfPassing: "",
                                    Duration: "",
                                    Achievement: "",
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
                                                    ]?.LevelOfTraining
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Training Level &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.LevelOfTraining`}
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
                                                    ]?.ExamDegreeTitle
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Exam Degree Title &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.ExamDegreeTitle`}
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
                                                    ]?.ConcentrationMajorGroup
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Major Group &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.ConcentrationMajorGroup`}
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
                                                    ]?.InstituteName
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
                                                name={`Trainings.${index}.InstituteName`}
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
                                                    ]?.Board
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Board &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.Board`}
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
                                                    ]?.YearOfPassing
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Year Passing &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                type="date"
                                                name={`Trainings.${index}.YearOfPassing`}
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
                                                    ]?.Result
                                                      ? "input-group-text bg-danger text-white"
                                                      : "input-group-text"
                                                  }
                                                >
                                                  Result &nbsp;
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </div>
                                              </div>
                                              <Field
                                                name={`Trainings.${index}.Result`}
                                                className="form-control"
                                                min="1"
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
                                          <div className="offset-sm-1 col-sm-11">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                  Achievement
                                                </div>
                                              </div>
                                              <Field
                                                as="textarea"
                                                name={`Trainings.${index}.Achievement`}
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

      {UserDetails?.Trainings?.map((edu, index) => (
        <div className="Training-label" key={index}>
          <span className="study-year">{edu.Duration}</span>
          <h5>
            {edu.LevelOfTraining}
            <span>@ {edu.InstituteName}</span>
          </h5>
          <p>{edu.Achievement}</p>
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
