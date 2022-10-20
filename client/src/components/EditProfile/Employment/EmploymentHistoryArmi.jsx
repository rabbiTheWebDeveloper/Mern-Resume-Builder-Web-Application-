//External Lib Import
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import { Col, Row } from "react-bootstrap";
import Select from "react-select";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";
import { Armss, BANo, Ranks, Types } from "../../../Fakedata";

const validationSchema = Yup.object().shape({
  EmploymentHistoryArmi: Yup.object().shape({
    BaType: Yup.string().required("BaType is Required"),
    BaNo: Yup.string().required("BaNo is Required"),
    Ranks: Yup.string().required("Ranks is Required"),
    Type: Yup.string().required("Type is Required"),
    Arms: Yup.string().required("Arms is Required"),
    Trade: Yup.string().required("Trade is Required"),
    Course: Yup.string().required("Course is Required"),
    DateOfCommission: Yup.string().required("Date Of Commission is Required"),
    DateOfRetirement: Yup.string().required("Date Of Retirement is Required"),
  }),
});

const EmploymentHistoryArmi = () => {
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
              Employment History(For Retired Army Person)
            </h4>
          </div>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  className={
                    props.errors.EmploymentHistoryArmi?.BaType
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  BA Type <span className="text-danger">*</span>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    BANo.find(
                      (item) =>
                        item.value ===
                        props?.initialValues?.EmploymentHistoryArmi?.BaType,
                    ),
                  ]}
                  options={BANo}
                  onChange={(e) =>
                    props.setFieldValue("EmploymentHistoryArmi.BaType", e.value)
                  }
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="BaNo"
                  className={
                    props.errors.EmploymentHistoryArmi?.BaNo
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Ba No <span>*</span>
                </label>
                <Field
                  type="number"
                  id="BaNo"
                  name="EmploymentHistoryArmi.BaNo"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  className={
                    props.errors.EmploymentHistoryArmi?.Ranks
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Ranks <span className="text-danger">*</span>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    Ranks[
                      Ranks.findIndex(
                        (item) =>
                          item.value ===
                          props?.initialValues?.EmploymentHistoryArmi?.Ranks,
                      )
                    ],
                  ]}
                  options={Ranks}
                  onChange={(e) =>
                    props.setFieldValue("EmploymentHistoryArmi.Ranks", e.value)
                  }
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label
                  className={
                    props.errors.EmploymentHistoryArmi?.Type
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Type <span className="text-danger">*</span>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    Types[
                      Types.findIndex(
                        (item) =>
                          item.value ===
                          props?.initialValues?.EmploymentHistoryArmi?.Type,
                      )
                    ],
                  ]}
                  options={Types}
                  onChange={(e) =>
                    props.setFieldValue("EmploymentHistoryArmi.Type", e.value)
                  }
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  className={
                    props.errors.EmploymentHistoryArmi?.Arms
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Arms <span className="text-danger">*</span>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    Armss[
                      Armss.findIndex(
                        (item) =>
                          item.value ===
                          props?.initialValues?.EmploymentHistoryArmi?.Arms,
                      )
                    ],
                  ]}
                  options={Armss}
                  onChange={(e) =>
                    props.setFieldValue("EmploymentHistoryArmi.Arms", e.value)
                  }
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="Trade"
                  className={
                    props.errors.EmploymentHistoryArmi?.Trade
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Trade <span>*</span>
                </label>
                <Field
                  id="Trade"
                  name="EmploymentHistoryArmi.Trade"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="Course"
                  className={
                    props.errors.EmploymentHistoryArmi?.Course
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Course <span>*</span>
                </label>
                <Field
                  id="Course"
                  name="EmploymentHistoryArmi.Course"
                  className="form-control"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="Course"
                  className={
                    props.errors.EmploymentHistoryArmi?.DateOfCommission
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Date Of Commission <span>*</span>
                </label>
                <Field
                  id="DateOfCommission"
                  name="EmploymentHistoryArmi.DateOfCommission"
                  className="form-control"
                  type="date"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="Course"
                  className={
                    props.errors.EmploymentHistoryArmi?.DateOfRetirement
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Date Of Retirement <span>*</span>
                </label>
                <Field
                  id="DateOfRetirement"
                  name="EmploymentHistoryArmi.DateOfRetirement"
                  className="form-control"
                  type="date"
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

export default EmploymentHistoryArmi;
