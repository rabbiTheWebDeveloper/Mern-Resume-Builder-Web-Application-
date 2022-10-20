//External Lib Import
import React from "react";
import { Tab, Tabs } from "react-bootstrap";

//Internal Lib Import
import AcademicSummary from "./AcademicSummary";
import ProfessionalSummary from "./ProfessionalSummary";
import TrainingSummary from "./TrainingSummary";

const EducationTraining = () => {
  return (
    <Tabs defaultActiveKey="AcademicSummary" className="mb-3 faq-tab">
      <Tab eventKey="AcademicSummary" title="Academic Summary">
        <AcademicSummary />
      </Tab>
      <Tab eventKey="TrainingSummary" title="Training Summary">
        <TrainingSummary />
      </Tab>
      <Tab
        eventKey="ProfessionalCertification"
        title="Professional Certification"
      >
        <ProfessionalSummary />
      </Tab>
    </Tabs>
  );
};

export default EducationTraining;
