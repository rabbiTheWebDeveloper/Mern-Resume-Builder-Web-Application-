//External Lib Import
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";

//Internal Lib Import
import UserRequest from "../../../APIRequest/UserRequest";
import { Col, Row } from "react-bootstrap";
import {
  BloodGroup,
  CountryList,
  GenderList,
  MaritalStatus,
  ReligionList,
} from "../../../Fakedata";
import GetBase64 from "../../../helper/GetBase64";

const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is Required"),
  LastName: Yup.string().required("Last Name is Required"),
  DateofBirth: Yup.string().required("Date of Birth is Required"),
  MaritalStatus: Yup.string().required("Marital Status is Required"),
  Nationality: Yup.string().required("Nationality is Required"),
  Phone: Yup.string().required("Phone is Required"),
  BloodGroup: Yup.string().required("Blood Group is Required"),
});

const PersonalDetails = () => {
  const { UserDetails } = useSelector((state) => state.User);

  let userImgRef,
    userImgView = useRef();

  const previewImage = (setFieldValue) => {
    const imgFile = userImgRef.files[0];
    GetBase64(imgFile).then((base64Img) => {
      userImgView.src = base64Img;
      setFieldValue("Image", base64Img);
    });
  };

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
          <div className="dashboard-section upload-profile-photo">
            <div className="update-photo">
              <img
                ref={(input) => (userImgView = input)}
                className="image"
                src={UserDetails?.Image}
                alt={UserDetails?.Email}
              />
            </div>

            <Field name="Image">
              {({
                field,
                form: { touched, errors, setFieldValue, values },
                meta,
              }) => (
                <div className="file-upload">
                  <input
                    onChange={() => previewImage(setFieldValue)}
                    ref={(input) => (userImgRef = input)}
                    className="file-input"
                    id="file_input"
                    type="file"
                  />
                  Change Avatar
                </div>
              )}
            </Field>
          </div>
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
              Basic Info
            </h4>
          </div>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="FirstName"
                  className={
                    props.errors.FirstName
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Input Your First Name <span className="text-danger">*</span>
                </label>
                <Field
                  name="FirstName"
                  id="FirstName"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="LastName"
                  className={
                    props.errors.LastName
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Input Your Last Name <span className="text-danger">*</span>
                </label>
                <Field
                  name="LastName"
                  id="LastName"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="FatherName">
                  Input Your Father Name
                </label>
                <Field
                  name="FatherName"
                  id="FatherName"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="MotherName">
                  Input Your Mother Name
                </label>
                <Field
                  name="MotherName"
                  id="MotherName"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="DateofBirth"
                  className={
                    props.errors.DateofBirth
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Date of Birth
                  <span className="text-danger">*</span>
                </label>
                <Field
                  name="DateofBirth"
                  type="date"
                  className="form-control"
                />
              </div>
            </Col>

            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="Gender"
                  className={
                    props.errors.Gender
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Gender
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    GenderList[
                      GenderList.findIndex(
                        (item) => item.value === props?.initialValues?.Gender,
                      )
                    ],
                  ]}
                  options={GenderList}
                  onChange={(e) => props.setFieldValue("Gender", e.value)}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="Religion" className="col-form-label">
                  Religion
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    ReligionList[
                      ReligionList.findIndex(
                        (item) => item.value === props?.initialValues?.Religion,
                      )
                    ],
                  ]}
                  options={ReligionList}
                  onChange={(e) => props.setFieldValue("Religion", e.value)}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="MaritalStatus"
                  className={
                    props.errors.MaritalStatus
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Marital Status <span className="text-danger">*</span>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    MaritalStatus[
                      MaritalStatus.findIndex(
                        (item) =>
                          item.value === props?.initialValues?.MaritalStatus,
                      )
                    ],
                  ]}
                  options={MaritalStatus}
                  onChange={(e) =>
                    props.setFieldValue("MaritalStatus", e.value)
                  }
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="Nationality"
                  className={
                    props.errors.Nationality
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Nationality <span className="text-danger">*</span>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    CountryList[
                      CountryList.findIndex(
                        (item) =>
                          item.value === props?.initialValues?.Nationality,
                      )
                    ],
                  ]}
                  options={CountryList}
                  onChange={(e) => props.setFieldValue("Nationality", e.value)}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="NationalId">
                  National Id
                </label>
                <Field
                  name="NationalId"
                  id="NationalId"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="PassportNumber">
                  Passport Number
                </label>
                <Field
                  name="PassportNumber"
                  id="PassportNumber"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="PassportIssueDate">
                  Passport Number
                </label>
                <Field
                  name="PassportIssueDate"
                  id="PassportIssueDate"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="Phone">
                  Input Your Phone Number
                </label>

                <PhoneInput
                  value={props?.initialValues?.Phone}
                  onChange={(phone) => props.setFieldValue("Phone", phone)}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="SecondaryMobile">
                  Secondary Phone Number
                </label>

                <PhoneInput
                  value={props?.initialValues?.SecondaryMobile}
                  onChange={(phone) =>
                    props.setFieldValue("SecondaryMobile", phone)
                  }
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="EmergencyContact">
                  Emergency Phone Number
                </label>
                <PhoneInput
                  value={props?.initialValues?.EmergencyContact}
                  onChange={(phone) =>
                    props.setFieldValue("EmergencyContact", phone)
                  }
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="Email">
                  Email Address
                </label>
                <Field
                  disabled
                  name="Email"
                  id="Email"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="AlternateEmail">
                  Secondary Email Address
                </label>
                <Field
                  name="AlternateEmail"
                  id="AlternateEmail"
                  type="text"
                  className="form-control"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label
                  htmlFor="BloodGroup"
                  className={
                    props.errors.BloodGroup
                      ? "col-form-label bg-danger text-white"
                      : "col-form-label"
                  }
                >
                  Blood Group <span className="text-danger">*</span>
                </label>
                <Select
                  isSearchable
                  closeMenuOnSelect={true}
                  defaultValue={[
                    BloodGroup[
                      BloodGroup.findIndex(
                        (item) =>
                          item.value === props?.initialValues?.BloodGroup,
                      )
                    ],
                  ]}
                  options={BloodGroup}
                  onChange={(e) => props.setFieldValue("BloodGroup", e.value)}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="HeightMeters">
                  Height Meters
                </label>
                <Field
                  id="HeightMeters"
                  name="HeightMeters"
                  type="number"
                  min="1"
                  className="form-control"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label className="col-form-label" htmlFor="WeightKg">
                  Height Meters
                </label>
                <Field
                  id="WeightKg"
                  name="WeightKg"
                  type="number"
                  min="1"
                  className="form-control"
                />
              </div>
            </Col>
            <Col>
              <button type="submit" className="button">
                Save Change
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
